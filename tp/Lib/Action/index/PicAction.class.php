<?php
class PicAction extends BaseAction
{

	/**
	 * 根据图片pid获得图片相关信息
	 */
	public function getPicture()
	{
		$id = $_GET['pid'];
		
		$pic = new MongoModel( "picture" );
		$picData = $pic->field( "_id,user,pic,pid,description,board,like_count,collect_count,tag_count,review_count" )->find( array(
			"where" => array(
				"pid" => (float) $id 
			) 
		) );
		
		$picData['user'] = $pic->getDBRef( $picData['user'] );
		$picData['board'] = $pic->getDBRef( $picData['board'] );
		
		$this->assign( 'pic', $picData );
		$this->display();
	}

	/**
	 * 查询board下的所有图片
	 */
	public function getBoardPictures()
	{
		$bid = $_POST['bid'];
		$limit = $_POST['limit'];
		$pid = $_POST['lastPid'];
		$pm = new PictureModel();
		$data = $pm->queryBoardPicturesByBid( $bid, $limit, $pid );
		$this->ajax( $data );
	}

	/**
	 * 用户喜欢或者取消喜欢一个图片
	 */
	public function likePicture()
	{
		$pid = $_GET['pid'];
		$uid = $_SESSION['uid'];
		
		$pm = new PictureModel();
		$return = $pm->likePicture( $pid, $uid );//没有涉及到错误的情况
		
		$return['status'] = 1;
		$this->ajax($return);
	}

// 	/**
// 	 * 通过图片id查找一个图片信息
// 	 */
// 	public function getPictureComment()
// 	{
// 		$pid = $_POST['pid'];
// 		$pm = new PicReviewModel();
// 	}
	
	/**
	 * 评论
	 */
	public function comment(){
		if($this->isAjax()){
			$pid = $_POST['pid'];
			$text = $_POST['text'];
			$uid = $_SESSION['uid'];
			$reply = $_POST['reply'];
			$reply_author = $_POST['replyAuthor'];
			$prm = new PicReviewModel();
			$result = $prm->comment($pid, $text, $uid, $reply, $reply_author);
			if(is_array($result))
			{
				$returnData["comment"] = $result;
				$returnData["status"] = 1;
				$this->ajax($returnData);
			}
			$this->ajax(result);
		}else{
			//不是ajax请求，返回错误信息
// 			$this->ajax();
		}
	}
	
	/**
	 * 通过pid查找图片的评论
	 */
	public function getPictureComments(){
		$pid = $_GET['pid'];
		$prm = new PicReviewModel();
		$prd = $prm->getPictureComments($pid);
		$this->ajax($prd);
	}
	
	/**
	 * 根据id删除评论
	 */
	public function deletePictureComment(){
		if($this->isAjax()){
			$id = $_GET['id'];
			$prm = new PicReviewModel();
			$result = $prm->deletePicComment($id);
			if($result === true){
				$returnData = array("status"=>1);
				$this->ajax($returnData);
			}
			//当出现错误时返回
			
		}
		//不是ajax请求返回
		
	}
	
	public function queryRelatePics(){
		$pid = $_GET['pid'];
		if($this->isAjax()){
			$uid = $_SESSION["uid"];
			$lastBid = $_GET['lastPid'];
				
			$pm = new PictureModel();
			$pics = $pm->queryRelatePics($pid, $uid);
				
			$this->ajax($pics);
		}else{
			$this->redirect("/pic/".$pid);
		}
	}

}
?>