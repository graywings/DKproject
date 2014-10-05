<?php
import("ORG.Util.Page");
import("ORG.Util.Message");
class IndexAction extends BaseAction {
	public function index(){
		if(!isset($_SESSION[C('USER_AUTH_KEY')])) {
			$this->redirect('../manage/Login');
		}
		if($_SESSION['userType']=='3')
			$this->redirect('./linksys/IndexManager');
		$infoM = M('weibo_userinfo');
		$info = $infoM ->where(array('rps_id'=>$_SESSION[C('USER_AUTH_KEY')])) ->find();
		$fansUpM = M('daily_statistics');
		$fansUp = $fansUpM->where(array('companyid'=>$_SESSION[C('USER_AUTH_KEY')]))->order('updatetime DESC')->find();
		$oldfans = isset($fansUp)?$fansUp['fansnumber']:0;
		$newfans = $info['rps_followers_count'];
		$fansup = $newfans-$oldfans>0?('+'.($newfans-$oldfans)):($oldfans-$newfans);
		$soc = isset($fansUp)?$fansUp['operatorscore']:0;
		$irank = isset($fansUp)?$fansUp['industryranking']:1;
		$trank = isset($fansUp)?$fansUp['teamranking']:1;
		$cover = isset($fansUp)?$fansUp['cover']:0;
		//*******************************************上边界****************************************
		$this->message_unRead_Count("first");

		//*******************************************下边界****************************************

		
		$m = M('online_maintain_service');
		$onlinelist=$m->where(array("categoryid"=>$_SESSION['categoryid']))->select();
		$onlinelist=json_encode($onlinelist);
				
		//判断是否有管理入口的权限
		$isEntDisplay='0';
		$pendpurch="false";
		if($_SESSION['userType'] != 2){
			$entperm = $_SESSION['permision'];
			$entpermision=split(',',$entperm);
			for ($i=0;$i<count($entpermision);$i++){
				if(strpos($entpermision[$i],'m_e')===false){
					//$isEntDisplay='0';
				}
				else{
					$isEntDisplay='1';
					break;
				}
			}
			$permisionAll = $_SESSION['permision'];
			$parray = split(",",$permisionAll);
			$pendpurch = in_array("4",$parray);
			if($pendpurch==true){
				$pendpurch="true";
			}
		}
		else{
			$isEntDisplay='1';
			$pendpurch="true";
		}
		
		$persission = $this->getPermission();
		$companyIds = $this->getCompanyIds();
		
		$this->assign('persission',$persission);
		$this->assign('pendpurch',$pendpurch);
		$this->assign('isEntDisplay',$isEntDisplay);
		$this->assign('companyIds',$companyIds);
		$this->assign('fansup',$fansup);
		$this->assign('soc',$soc);
		$this->assign('irank',$irank);
		$this->assign('trank',$trank);
		$this->assign('cover',$cover);
		$this->assign('companyid',$_SESSION[C('USER_AUTH_KEY')]);
		$this->assign('type',$_SESSION['userType']);
		$this->assign($info);
		$this->assign('trace',$_SESSION['industryName']);
		$this->assign('onlineservice',$onlinelist);
		if($_SESSION['needut']==1 && $_SESSION['userType']==1)
			$this->assign('needut','您运维的企业账号'.$_SESSION['companyname'].'授权即将过期，请联系企业账号管理员进行重新授权。');
		if($_SESSION['needut']==1 && $_SESSION['userType']==2)
		{
			$model = M('appinfo');
			$apiinfo = $model->find();
			$appkey = $apiinfo['appkey'];
			$backurl = C('BACKURL');
			$url = "https://api.weibo.com/oauth2/authorize?client_id=".$appkey."&redirect_uri=".$backurl;
			$this->assign('needut','<a href="'.$url.'" style="color:#FFFFFF;">由于新浪微博授权机制的规定，您需要定期对平台进行授权</a>');
		}
			
		$this -> assign("sysdate", date('U')."000");
		$this->display();
								
	}
	
	

	public function getFaceList(){
		
		$totalnum=$_REQUEST['totalnum'];
		//$totalnum=5;
		$page=$_REQUEST['page'];			
		$type=$_REQUEST['type'];	
		$faceaction=new FaceAction();
		$facelisst=$faceaction->getFace($type);
		
		$count=count($facelisst);
		$json['pagecount']=ceil($count/$totalnum);
		
		$num=0;		
		for($i=($page-1)*$totalnum;$i<$page*$totalnum;$i++){
			$json['list'][$num++]=$facelisst[$i];
		}
		
		$json=json_encode($json);
		echo $json;
	}
	
	
//	public function getFacebyPhrase(){
//		
//		$phrase=$_REQUEST['phrase'];
//		$faceaction=new FaceAction();
//		
//		$arry =split(",", $phrase);
//		
//		foreach($arry as $value){
//			$face=$faceaction->getFacebyPhrase($value);
//			$arrReturn.push
//		}
//
//		$json=json_encode($face);
//		echo $json;
//		
//		
//	
//		
//	}
	

	
	public function getFaceCount(){	
		
		$faceaction=new FaceAction();
		$facelisst=$faceaction->getFace();
		echo count($facelisst);
	}


	//*******************************************上边界****************************************
	/**
	 * 查询回复的方法
	 */
	public function SelectReply()
	{
		$tid=$_POST['tid'];
		$messageData=M('messageData');
		$map['tid']=array('eq',$tid);
		$relayid=$messageData->where($map)->getField('relayid');
		$map1['tid']=array('eq',$relayid);
		$json=$messageData->where($map1)->getField('msgContext');
		$json = json_encode($json);
		echo $json;
	}
	/**
	 * 保存紧急求助回复
	 */
	public function reply_Emergency()
	{
		$msgContext=$_POST['msgContext'];
		//因为修改和添加都是对一张表的操作，所以new出一个模型就够了
		$messageData=M('messageData');
		//添加回复数据到表里
		$messageData->create();
		$messageData->msgType = "Emergencyrelay";
		$messageData->msgTitle = "回复消息";
		$messageData->msgContext = "内容:$msgContext";
		$messageData->msgStatus = 1;
		$messageData->sendUserId = $_SESSION[C('USER_AUTH_KEY')];
		$messageData->sendUserName = $_SESSION['userName'];
		$messageData->sendTime = date('Y-m-d H-i-s');
		$messageData->targetUserId = $_SESSION[C('USER_AUTH_KEY')];
		$messageData->targetUserName = $_SESSION['userName'];
		$messageData->targetUserMail = "";
		$messageData->targetUserTel = "";
		$messageData->targetDirectId = "";
		$messageData->isConfim = 1;
		$messageData->replayAct = "";
		$messageData->businessTableId = "";
		$messageData->relayid = "";
		$messageData->add();
		//修改回复的帖子的relayid指向回复的数据
		$this->success("操作成功！",null,true);


	}
	/**
	 * 保存紧急求助
	 */
	public function Emergency_save()
	{
		$msgTitle=$_POST['msgTitle'];
		$msgContext=$_POST['msgContext'];
		$companyaccount=M('companyaccount');
		$map['companyid']=array('eq',$_SESSION[C('USER_AUTH_KEY')]);
		$targetUsermail=$companyaccount->where($map)->getField('mail');
		$targetUserTel=$companyaccount->where($map)->getField('mobile');
		$this->saveMessage($msgTitle,$msgContext,$targetUsermail,$targetUserTel);
		$this->success("操作成功！",null,true);
	}
/**
	 * 紧急求助自动回复
	 */
	public function Emergency_reply()
	{
		$msgTitle=$_POST['msgTitle'];
		$msgContext="您发送的求助内容我们已收到，我们将尽快处理，请耐心等待。";
		$companyaccount=M('companyaccount');
		$map['companyid']=array('eq',$_SESSION[C('USER_AUTH_KEY')]);
		$targetUsermail=$companyaccount->where($map)->getField('mail');
		$targetUserTel=$companyaccount->where($map)->getField('mobile');
		$this->sendReplyMessage($msgTitle,$msgContext,$targetUsermail,$targetUserTel);
		//$this->success("操作成功！",null,true);
	}
/**
	 * 保存方法
	 */
	public function sendReplyMessage($msgTitle,$msgContext,$targetUsermail,$targetUserTel)
	{

		$User=M('messageData');

		$msgConfig['msgTitle']="$msgTitle";

		$msgConfig['msgContext']="$msgContext";

		$msgConfig['msgStatus']=0;

		$msgConfig['msgType']="sitemessage";//支持mail（邮件）,sitemessage（站内消息）,sms（短信）,directmessage（私信）,Emergencymessage(紧急求助消息)

		$msgConfig['sendUserId']=$_SESSION[C('USER_AUTH_KEY')];

		$msgConfig['sendUserName']=$_SESSION['userName'];

		$msgConfig['sendTime']= date('Y-m-d H-i-s');

		$msgConfig['targetUserId']=$_SESSION[C('USER_AUTH_KEY')];

		$msgConfig['targetUserName']=$_SESSION['userName'];

		$msgConfig['targetUserMail']=$targetUsermail;

		$msgConfig['targetUserTel']=$targetUserTel;
			
		//$msgConfig['membertype']=$type;

		//$msgConfig['targetDirectId']="sina_weibo_0000121120012";

		$msgConfig['isConfim']=1;

		$msgConfig['replayAct']="url";//回调方法URL

		$msgConfig['businessTableId']="0";//业务数据标识

			
		$message = new Message($msgConfig);

		$isSended = $message->sendMsg();

	}
	/**
	 * 保存方法
	 */
	public function saveMessage($msgTitle,$msgContext,$targetUsermail,$targetUserTel)
	{

		$User=M('messageData');

		$msgConfig['msgTitle']="$msgTitle";

		$msgConfig['msgContext']="$msgContext";

		$msgConfig['msgStatus']=0;

		$msgConfig['msgType']="Emergencymessage";//支持mail（邮件）,sitemessage（站内消息）,sms（短信）,directmessage（私信）,Emergencymessage(紧急求助消息)

		$msgConfig['sendUserId']=$_SESSION[C('USER_AUTH_KEY')];

		$msgConfig['sendUserName']=$_SESSION['userName'];

		$msgConfig['sendTime']= date('Y-m-d H-i-s');

		$msgConfig['targetUserId']=$_SESSION[C('USER_AUTH_KEY')];

		$msgConfig['targetUserName']=$_SESSION['userName'];

		$msgConfig['targetUserMail']=$targetUsermail;

		$msgConfig['targetUserTel']=$targetUserTel;
			
		//$msgConfig['membertype']=$type;

		//$msgConfig['targetDirectId']="sina_weibo_0000121120012";

		$msgConfig['isConfim']=1;

		$msgConfig['replayAct']="url";//回调方法URL

		$msgConfig['businessTableId']="0";//业务数据标识

			
		$message = new Message($msgConfig);

		$isSended = $message->sendMsg();

	}
	/**
	 * 查询新的未读站内信总数和集合的方法
	 */
	public function message_unRead_Count($flag)
	{
		$message = M('messageData');
		$map['msgStatus']  = array('eq','0');
		$map['msgType']  = array('IN','sitemessage,Emergencyrelay');
		$map['targetUserId']  = array('eq',$_SESSION[C('USER_AUTH_KEY')]);
		$count = $message->where($map)->count();
		if($flag=="first")
		{
			$json['count']=$count;
			$json['unReadMessList']=$message->where($map)->order('tid', 'ASC')->limit("3")->select();
			$json = json_encode($json);
			$this->assign('unReadMessList',$json);
		}
		else
		{
			$json['count']=$count;
			$json['unReadMessList']=$message->where($map)->order('tid', 'ASC')->limit("3")->select();
			$json = json_encode($json);
			return $json;
		}
	}

	/**
	 * 刷新页面的信息窗口
	 */
	public function message_unRead_Count_sum()
	{
		$json=$this->message_unRead_Count("last");
		echo $json;
	}



	/**
	 * 展现消息中心页面(主页)
	 */
	public function msgCen()
	{
		//获取查询条件
		$search_code=0;
		if(!empty($_REQUEST['status']))
		{
			$search_code = $_REQUEST['status'];
			if($search_code==2)
			{
				$search_code=0;
			}
		}
		if(!empty($_POST['mailType']))
		{
			$msgType = $_POST['mailType'];
			$json=$this->message_Query_EmergencyMessage($msgType);
			echo $json;
		}
		else
		{
			$this->message_unRead_Count("first");
			$json=$this->message_Query_AllMessage($search_code);
			if(empty($_REQUEST['do']))
			{
				$this->assign('Message_allMessList',$json);
				$this->display();
			}
			else
			{
				echo $json;
			}
		}
	}

	/**
	 * 查询所有站内信集合
	 */
	public function message_Query_AllMessage($code)
	{
		$message_All=M();
		$targetUserId=$_SESSION[C('USER_AUTH_KEY')];
		if($code==0)
		{
			$message = M('messageData');
			$map['targetUserId'] = $_SESSION[C('USER_AUTH_KEY')];
			$map['msgStatus'] = 0;
			$map['msgType'] = "sitemessage";
			$data['msgStatus'] = 1;
			$message->where($map)->save($data); 
			
			$sql="SELECT DISTINCT t.isReply,t1.rps_profile_image_url,t2.tid,t2.msgTitle,t2.msgContext,t2.sendUserName,t2.sendTime,t2.msgType,t2.isConfim,t2.replayAct,t2.businessTableId FROM linksys_message_data t2 LEFT JOIN linksys_weibo_userinfo t1 ON  t1.rps_id=t2.sendUserId LEFT JOIN linksys_company_square_member t ON t.square_memberid=t2.targetUserId WHERE t2.targetUserId=$targetUserId AND t2.msgType IN ('sitemessage','Emergencyrelay') AND t2.msgStatus='0' ORDER BY t2.tid DESC";
		}
		if($code==1)
		{	
			$sql ="SELECT DISTINCT t.isReply,t1.rps_profile_image_url,t2.tid,t2.msgTitle,t2.msgContext,t2.sendUserName,t2.sendTime,t2.msgType,t2.isConfim,t2.replayAct,t2.businessTableId FROM linksys_message_data t2 LEFT JOIN linksys_weibo_userinfo t1 ON  t1.rps_id=t2.sendUserId LEFT JOIN linksys_company_square_member t ON t.square_memberid=t2.targetUserId WHERE t2.targetUserId=$targetUserId AND t2.msgType IN ('sitemessage','Emergencyrelay') AND t2.msgStatus='1' ORDER BY t2.tid DESC";
		}

		$count = $this->makeCountBySql($sql);
		$p   = new Page($count,3);
		$newlimit_value = $p->firstRow . "," . $p->listRows;
		$sql = $this->makeLimitBySql($sql,$newlimit_value);
		$json['page'] = $this->ajax_page($p->getPageInof());
		$countModel = new Model();
		$json['Message_allMessList'] = $countModel->query($sql);
		$json = json_encode($json);
		return $json;
	}

	/**
	 * 查询紧急求助集合
	 */
	public function message_Query_EmergencyMessage($msgType)
	{
		//在查询紧急求助集合之前，将所有未读紧急求助回复置为已读状态
		if($msgType=="Emergencymessage")
		{
			$message = M('messageData');
			$map['targetUserId'] = $_SESSION[C('USER_AUTH_KEY')];
			$map['msgStatus'] = 0;
			$map['msgType'] = "Emergencyrelay";
			$data['msgStatus'] = 1;
			$message->where($map)->save($data); 
		}
		$message_All=M();
		$targetUserId=$_SESSION[C('USER_AUTH_KEY')];
		$sql ="SELECT  t1.rps_profile_image_url,t2.tid,t2.msgTitle,t2.msgContext,t2.sendUserName,t2.sendTime,t2.msgType,t3.msgContext replyContent FROM linksys_weibo_userinfo t1,linksys_message_data t2 LEFT JOIN linksys_message_data  t3 ON t2.relayid=t3.tid WHERE t1.rps_id=t2.sendUserId AND t2.sendUserId=$targetUserId AND t2.msgType='Emergencymessage' ORDER BY t2.tid DESC";
		$count = $this->makeCountBySql($sql);
		$p   = new Page($count,3);
		$newlimit_value = $p->firstRow . "," . $p->listRows;
		$sql = $this->makeLimitBySql($sql,$newlimit_value);
		$json['page'] = $this->ajax_page($p->getPageInof());
		$countModel = new Model();
		$json['Message_allMessList'] = $countModel->query($sql);
		$json = json_encode($json);
		return $json;
	}


	/**
	 * 将前台某一条指定id的站内信状态置为已读,并且返回前台新的查询结果
	 */
	public function message_little_window_change()
	{
		$this->message_status_change();
		$json=$this->message_unRead_Count("last");
		echo $json;
	}

	/**
	 * 将指定ID的站内信状态置为已读
	 */
	public function message_status_change()
	{
		$message = M('messageData');
		$message->create();
		$message->msgStatus=1;
		$message->save();
	}


	/**
	 * 申请状态设置为已处理,并且设置为已读
	 */
	public  function message_application_processing()
	{
		$message = M('messageData');
		$message->create();
		$message->tid=$_POST['tid'];
		$message->isConfim=1;
		$message->msgStatus=1;
		$message->save();
		$json=$this->message_unRead_Count("last");
		echo $json;
	}
	//*******************************************下边界****************************************
	public function footer()
	{
			
	}

	/**
	 * 获取当前用户的权限菜单
	 */
	public function getPermission(){
		$permision = $_SESSION['permision'];
			
		$resultList;
		$count=0;
		$typePermission = M("typePermission");
		$list = $typePermission->field('code,name')->where("isenable = '1' and type='1' and pid is not null")->select();
		if($_SESSION['userType'] == 2)
		{
			$resultList = $list;
		}
		else{
			if(isset($permision)){
				$permisionArray = split(",",$permision);
				foreach ($permisionArray as $permi){
					for ($i=0;$i<count($list);$i++){
						if($list[$i]['code']==$permi){
							$resultList[$count]['code']=$permi;
							$resultList[$count]['name']=$list[$i]['name'];
							$count++;
							break;
						}
					}
				}
					
			}
		}
		return $resultList;
	}

	/**
	 * 获取帐号切换列表
	 */
	public function getCompanyIds(){
		$personId = $_SESSION['persionId'];
		$sql = "SELECT u.rps_id,u.rps_name FROM linksys_companyworker t,linksys_weibo_userinfo u WHERE t.persionid='".$personId."' AND t.companyid=u.rps_id";
		$model = new Model();
		$companyList = $model->query($sql);
		return $companyList;
	}

	/**
	 * 帐号切换
	 */
	public function  accountSwitch(){
		$_SESSION['menuJson']=null;
		$personId = $_SESSION['persionId'];
		$companyid = $_POST['companyid'];
		$ucw = M('companyworker');
		$ucw_search['persionid'] =$personId;
		$ucw_search['companyid'] =$companyid;
			
		$work = $ucw->where($ucw_search)->find();
		if(!isset($work))
		$this->error('个人账户未绑定任何企业！','',true);
		$companyid = $work['companyid'];
			
		$cm = M('companyaccount');
		$cm_search = array('companyid'=>$companyid);
		$cinfo = $cm->where($cm_search)->find();
		if(!isset($cinfo))
		$this->error('所绑定企业账户异常！','',true);
			
		//$companyid = $cinfo['companyid'];
		//$userName = $_POST['userName'];
		$companyname = $cinfo['companyname'];
		$business = $cinfo['business'];
		$token = $cinfo['oauthtokensecret'];
		$permision = $work['permision'];
		$WeiboNumber = D('WeiboNumber');
		//$WeiboNumber->updateUserInfo($companyid,$token);
		//$WeiboNumber->updateCommentsNumber($token);
		//$WeiboNumber->updateAtNumber($token);
		//$WeiboNumber->update_friends($companyid,$token);
			
		$_SESSION['userType'] = 1;
		$_SESSION[C('USER_AUTH_KEY')]	=	$companyid;
		//$_SESSION['persionId'] = $personId;
		$_SESSION['companyname'] = $companyname;
		//$_SESSION['userName'] = $userName;
		$_SESSION['token'] = $token;
		$_SESSION['permision'] = $permision;
		$_SESSION['industry'] = $cinfo['business'];
		$this->ajaxReturn();
	}

	public function getCallWinPic(){
			
			
		$path = 'wbcloud/Public/main/img/callWin/pic/qjw';
		$listSrc = array();


		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/打打打.gif");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/感谢你.gif");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/管不着.jpeg");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/悔恨.gif");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/禁声.jpeg");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/惊讶.gif");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/看海.jpeg");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/看什么看.gif");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/闹.jpeg");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/努力.gif");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/喷.jpeg");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/气死你.gif");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/强吻.gif");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/情人节.jpeg");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/群舞.gif");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/胜利.gif");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/送礼物.jpeg");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/天马流星拳.gif");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/挑逗.gif");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/我要长大.gif");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/信菇哥.gif");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/星期五.jpeg");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/行大礼.jpeg");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/御风飞行.gif");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/赞.jpeg");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/崭新的一天.jpeg");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/抓狂了.jpeg");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/转晕你.gif");
		array_push($listSrc,"/wbcloud/Public/main/img/callWin/pic/qjw/装可爱.jpeg");


		/*$current_dir = opendir($path);    //opendir()返回一个目录句柄,失败返回false
		 dump($current_dir);
		 while(($file = readdir($current_dir)) !== false) {    //readdir()返回打开目录句柄中的一个条目

			$sub_dir = $path . DIRECTORY_SEPARATOR . $file;    //构建子目录路径

			if($file == '.' || $file == '..') {
			continue;
			} else if(is_dir($sub_dir)) {    //如果是目录,进行递归
			//echo 'Directory ' . $file . ':<br>';
			traverse($sub_dir);
			} else {    //如果是文件,直接输出
			//echo 'File in Directory ' . $path . ': ' . $file . '<br>';
			array_push($listSrc,$path . '/' . $file);
			}
			}*/



		$json = json_encode($listSrc);

		//$val = __SELF__ ;  //       /WBCloud/Index/getCallWinPic/
		//$val = __ACTION__ ;  //       /WBCloud/Index/getCallWinPic
		//$val = __APP__ ;    //        /WebCloud
		//$json = $val;

		echo $json ;
	}

	/**
	 * 查询个性化定制图片
	 */
	public function queryPic(){
		$purchaseContent=D('PurchaseContent');
		$purchaseLists = $purchaseContent->queryPurchasePic($_SESSION[C('USER_AUTH_KEY')]);
		echo $purchaseLists;
		//$this->assign('purchaseLists',$purchaseLists);
	}

	public function getJsonMessage()
	{
		date_default_timezone_set('Asia/Chongqing');
		$osource = "linksns";
		$oSearchValue = $_POST['oSearchValue'];
		$oDate = date("Y-n-j");
		//$access_date = date("Y-n-j");
		$oInput = "qj".$osource.$oSearchValue.$oDate;
		$oSearchType = $_POST['oSearchType'];
		$oPageCount = $_POST['oPageCount'];
		$oPageIndex = $_POST['oPageIndex'];
		$oKey = md5($oInput);
		$editvalue = "SearchValue=".rawurlencode($oSearchValue)."&ProdType=".$oSearchType."&source=".$osource."&key=".$oKey."&pagecount=".$oPageCount."&pageindex=".$oPageIndex;
		Log::write($editvalue,Log::ERR);
		$curl_url = "http://api.quanjing.com/SearchImage.aspx?".$editvalue;
		$html = file_get_contents($curl_url);
//		$ch = curl_init($curl_url);
//		//SearchValue=1&ProdType=0&pagecount=17&pageindex=2&source=linksns&key=f2bf39c8ddf38b11e367aea24ef5cc26";
//		//.$website .
//		//  "&pwd=".$pwd."&action=check&pseid=".$psecode .
//		//"&amt=" . $amt;
//		$this_header = array("content-type: application/x-www-form-urlencoded; charset=UTF-8");
//		//curl_setopt($ch,CURLOPT_HTTPHEADER,$this_header);
//		//curl_setopt($ch, CURLOPT_URL,$curl_url);
//		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true) ; // 获取数据返回
//		curl_setopt($ch, CURLOPT_BINARYTRANSFER, true) ; // 在启用 CURLOPT_RETURNTRANSFER 时候将获取数据返回
//		//curl_setopt($ch, CURLOPT_POST, false);
//		//  curl_setopt($ch, CURLOPT_HEADER,false);
//		//curl_setopt($ch, CURLOPT_GET, 1);
//		//curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);//不直接输出，返回到变量
//		$curl_result = curl_exec($ch);
//		$result = explode(',', $curl_result);
//		curl_close($ch);
		$string = $html;
		//echo json_encode("{result:'".$string."'}");
		//Log::write("CCCCCC:::".$string,Log::ERR);
		$string = str_replace("<string>", "", $string);
		$string = str_replace("</string>", "", $string);
		$string = str_replace("\r\n", "", $string);
		//echo json_encode("{result:'".$string."'}");
		$xml = simplexml_load_string($string);
		//echo $xml;
		echo json_encode($xml);
	}
	
	public function getJsonEmotions(){
		$curlapi = D('Curlapi');
		$listEmotions = $curlapi->emotions('face');
		
		//echo dump($listEmotions);
		$json = json_encode($listEmotions);
		//$json = $listEmotions;
		echo json_encode($listEmotions);
	}
	
}