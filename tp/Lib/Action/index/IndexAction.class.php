<?php
class IndexAction extends BaseAction
{

	public function index()
	{
		// 插入dbref例子
		/*
		 * $a = new MongoModel( "a" ); $ad = $a->add( array( 'name' => '2', 'desc' => '222' ) ); $b = new MongoModel( "b" ); $ref = $b->createDBRef( "a", $ad['_id'] );//创建dbref 关联 $b->add( array( 'name' => 'b', 'desc' => 'bbb', 'aid' => $ref ) );
		 */
		
		// 查询dbref例子
		/*
		 * $b = new MongoModel( "b" ); $bd = $b->find( array( 'where' => array( '_id' => '543228909734b82810000017' ) ) ); $ad = $b->getDBRef( $bd['aid'][0] ); print_r($ad);
		 */
		
		// $this->display();
	}

	public function getPictures()
	{
		if ($this->isAjax())
		{
			$limit = $_POST['limit'];
			$lastPid = $_POST['lastPid'];
			
			$pic = new MongoModel( "picture" );
			if (empty( $lastPid ))
			{
				$this->data = $pic->field( "_id,author_id,image,pid,description" )->limit( 0, $limit )->select( array(
					'order' => array(
						"pid" => - 1 
					) 
				) );
			}
			else
			{
				$this->data = $pic->field( "_id,author_id,image,pid,description" )->limit( 0, $limit )->select( array(
					'where' => array(
						"pid" => array(
							'$lt' => (float) $lastPid 
						) 
					),
					'order' => array(
						"pid" => - 1 
					) 
				) );
			}
			
			$this->ajax( $this->data );
		}
	}

	public function getPicture()
	{
		$id = $_GET['pid'];
		
		$pic = new MongoModel( "picture" );
		$picData = $pic->field( "_id,author_id,image,pid,description" )->find( array(
			"where" => array(
				"pid" => (float) $id 
			) 
		) );
		
		$this->assign( 'pic', $picData );
		$this->display();
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

}