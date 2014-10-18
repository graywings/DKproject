<?php
class IndexAction extends BaseAction
{

	public function index()
	{
		
// 		$uid = 10000001;
// 		$bid = 100000002;
		
// 		new MongoId("543b75a0800c0e51dd33e8c0");
		
// 		插入dbref例子
		
// 		$a = new MongoModel( "a" );
// 		$ad = $a->add( array(
// 			'name' => '2',
// 			'desc' => '222' 
// 		) );
// 		$b = new MongoModel( "b" );
// 		$ref = $b->createDBRef( "user", new MongoId("543b75a0800c0e51dd33e8c0") );
// 		$b->add( array(
// 			'name' => 'b',
// 			'desc' => 'bbb',
// 			'aid' => $ref
// 		) );
		
// 		查询dbref例子
		
// 		$b = new MongoModel( "b" );
// 		$bd = $b->find( array(
// 			'where' => array(
// 				'_id' => '54336e259734b8e814000001' 
// 			) 
// 		) );
		
		// $ad = $b->getDBRef( $bd['aid'] );
		// print_r( $ad );
		$this->display();
	}

	public function getPictures()
	{
		if ($this->isAjax())
		{
			$uid = 10000001;
			$bm = new BoardModel();
			$barr = $bm->queryFollowBoardsIncludeUsers( $uid );
			
			$limit = $_POST['limit'];
			$lastPid = $_POST['lastPid'];
			
			$pic = new MongoModel( "picture" );
			if (empty( $lastPid ))
			{
				$data = $pic->field( "_id,user,pic,pid,description,board" )->limit( 0, $limit )->select( array(
					'where' => array(
						"bid" => array(
							'$in' => $barr 
						) 
					),
					'order' => array(
						"pid" => - 1 
					) 
				) );
			}
			else
			{
				$data = $pic->field( "_id,user,pic,pid,description,board" )->limit( 0, $limit )->select( array(
					'where' => array(
						"bid" => array(
							'$in' => $barr 
						),
						"pid" => array(
							'$lt' => (float) $lastPid 
						) 
					),
					'order' => array(
						"pid" => - 1 
					) 
				) );
			}
			
			reset( $data );
			while ( list ( $key, $val ) = each( $data ) )
			{
				$boardDoc = $pic->getDBRef( $val['board'] );
				$authorDoc = $pic->getDBRef( $val['user'] );
				$val['board'] = $boardDoc;
				$val['user'] = $authorDoc;
				$finalData[$key] = $val;
			}
			
			$this->ajax( $finalData );
		}
	}

	/**
	 * 根据图片的pid查找该图片的详细信息
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

		$picData['user'] = $pic->getDBRef($picData['user']);
		$picData['board'] = $pic->getDBRef($picData['board']);
		
		$this->assign( 'pic', $picData );
		$this->display();
	}
	
	/**
	 * 根据board的bid查找所属该相册的所有图片
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
	
	public function likePicture(){
		$pid = $_GET['pid'];
		$uid = 10000001;
		
		$pm = new PictureModel();
		$pm->likePicture($pid, $uid);
		
	}

	public function uploadPage()
	{
		$this->display();
	}

	public function upload()
	{
		import( "ORG.Net.UploadFile" );
		$config['savePath'] = './Public/Uploads/';
		$config['thumb'] = true;
		$config['thumbPrefix'] = 'm_,s_'; // 生产2张缩略图 设置生成文件前缀
		$config['thumbMaxWidth'] = '236,50';
		$config['thumbMaxHeight'] = ',50';
		$config['thumbType'] = 0;
		$upload = new UploadFile( $config ); // 实例化上传类
		$upload->maxSize = 3145728; // 设置附件上传大小
		$upload->allowExts = array(
			'jpg',
			'gif',
			'png',
			'jpeg' 
		); // 设置附件上传类型
		
		if (! $upload->upload())
		{ // 上传错误提示错误信息
			$this->error( $upload->getErrorMsg() );
		}
		else
		{ // 上传成功 获取上传文件信息
			$info = $upload->getUploadFileInfo();
		}
	}

	/**
	 * 查询可专注的分类
	 * 只查询目录类型为1的所有分类
	 */
	public function getFollowCatalogs()
	{
		$cat = new MongoModel( "catalog" );
		$data = $cat->field( "url,name,code" )->select( array(
			"order" => array(
				"sort" => 1 
			) 
		) );
		
		$this->ajax( $data );
	}

}