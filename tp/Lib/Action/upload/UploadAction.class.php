<?php
include ("UploadFile.class.php");
class UploadAction extends BaseAction
{
	// private $s_pic_width = '68';
	// private $m_pic_width = '236';
	// private $b_pic_width = '736';
	public function uploadPage()
	{
// 		$this->assign( 'info', "请上传图片！" );
		$this->display();
	}

	public function uploadThumb()
	{
		$this->_upload( '75,236,736', '', './Public/main/img/test/orgi/', 's_,m_,b_', array(
			"./Public/main/img/test/75px/",
			"./Public/main/img/test/236px/",
			"./Public/main/img/test/736px/" 
		) );
		$this->display( "Tpl/index/Index/index.html" );
	}

	private function _upload($width, $height, $path, $prefix, $thumbPath)
	{
		$config['savePath'] = $path;
		$config['thumb'] = true;
		$config['thumbPrefix'] = $prefix;
		$config['thumbMaxWidth'] = $width;
		$config['thumbMaxHeight'] = $height; // ',50';
		$config['thumbType'] = 0;
		$config['thumbPath'] = $thumbPath;
		$upload = new UploadFile( $config );
		$upload->maxSize = 3145728;
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
			$this->assign( 'info', "上传成功！" );
			// 引入图片包
			import( 'ORG.Util.Image' );
			// 获得上传后的保存路径(原图)
			$savepath_orgi = $info[0]['savepath'];
			// 获得上传后的保存名称(原图)
			$savename_orgi = $info[0]['savename'];
			// 原图的信息
			$imageInfo_orgi = Image::getImageInfo( $savepath_orgi . $savename_orgi );
			// 原图宽
			$width_orgi = $imageInfo_orgi['width'];
			// 原图高
			$height_orgi = $imageInfo_orgi['height'];
			// 路径拆分
			$savePathArray = explode( "/", $savepath_orgi );
			// 公共路径
			$savepath_common = $savePathArray[0] . "/" . $savePathArray[1] . "/" . $savePathArray[2] . "/" . $savePathArray[3] . "/" . $savePathArray[4] . "/";
			// mongo保存公共路径
			$mongoURL_common = "/" . $savePathArray[2] . "/" . $savePathArray[3] . "/" . $savePathArray[4] . "/";
			// mongo原图路径
			$mongoURL_orgi = $mongoURL_common . "orgi/" . $savename_orgi;
			
			// 75px路径
			$savepath_75px = $savepath_common . "75px/";
			// 75px名称
			$savename_75px = "s_" . $savename_orgi;
			// 75px的信息
			$imageInfo_75px = Image::getImageInfo( $savepath_75px . $savename_75px );
			// 75px高
			$height_75px = $imageInfo_75px['height'];
			// mongo75px路径
			$mongopath_75px = $mongoURL_common . "75px/" . $savename_75px;
			
			// 236px路径
			$savepath_236px = $savepath_common . "236px/";
			// 236px名称
			$savename_236px = "m_" . $savename_orgi;
			// 236px的信息
			$imageInfo_236px = Image::getImageInfo( $savepath_236px . $savename_236px );
			// 236px高
			$height_236px = $imageInfo_236px['height'];
			// mongo236px路径
			$mongopath_236px = $mongoURL_common . "236px/" . $savename_236px;
			
			// 736px路径
			$savepath_736px = $savepath_common . "736px/";
			// 736pc名称
			$savename_736px = "b_" . $savename_orgi;
			// 736px的信息
			$imageInfo_736px = Image::getImageInfo( $savepath_736px . $savename_736px );
			// 736px高
			$height_736px = $imageInfo_736px['height'];
			// mongo736px路径
			$mongopath_736px = $mongoURL_common . "736px/" . $savename_736px;
			$savePicArray = array(
				$mongoURL_orgi,
				$width_orgi,
				$height_orgi,
				$mongopath_736px,
				$height_736px,
				$mongopath_236px,
				$height_236px,
				$mongopath_75px,
				$height_75px 
			);
			self::insertMongodb( $savePicArray );
		}
	}

	private static function insertMongodb($savePicArray)
	{
		// 插入数据库操作
		$pic = new MongoModel( "picture" );
		$data['pid'] = 1000000509;
		$data['uid'] = $_SESSION['uid'];
		$data['datetime'] = date( 'y/m/d h:i:s', time() );
		
		$ref_user = $pic->createDBRef( "user", new MongoId( "543b759f800c0e51dd33e8bf" ) );
		$data['user'] = $ref_user;
		$data['from_user'] = '';
		$data['bid'] = 100000003;
		
		$board_user = $pic->createDBRef( "board", new MongoId( "5402ed220224ab30a10b57f1" ) );
		$data['board'] = $board_user;
		
		$data['catalog_code'] = 'cw';
		$catalog_user = $pic->createDBRef( "catalog", new MongoId( "543bf509bd5cf24af6444c1d" ) );
		$data['catalog'] = $catalog_user;
		$data['source'] = '0';
		$data['source_url'] = '';
		$data['source_domain'] = '';
		$data['description'] = '正确的相册及分类123';
		
		$data['pic'] = array(
			"orgi" => array(
				"url" => $savePicArray[0],
				"width" => $savePicArray[1] . "px",
				"height" => $savePicArray[2] . "px" 
			),
			"736px" => array(
				"url" => $savePicArray[3],
				"width" => "736px",
				"height" => $savePicArray[4] . "px" 
			),
			"236px" => array(
				"url" => $savePicArray[5],
				"width" => "236px",
				"height" => $savePicArray[6] . "px" 
			),
			"75px" => array(
				"url" => $savePicArray[7],
				"width" => "75px",
				"height" => $savePicArray[8] . "px" 
			) 
		);
		$data['allow_view'] = '1';
		$data['allow_view'] = '1';
		$data['allow_review'] = '1';
		$data['allow_collect'] = '1';
		$data['like_count'] = '0';
		$data['collent_count'] = '0';
		$data['tag_count'] = '0';
		$data['review_count'] = '0';
		
		$pic->data( $data )->add();
	}

}
?>