<?php
class UploadAction extends BaseAction
{
	public function uploadPage()
	{
		$this->assign( 'info', "请上传图片！" );
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
			$this->assign( 'info', "上传成功！" );
		}
		//插入数据库操作
		$pic = new MongoModel( "picture" );
		$data['_id'] = '111111';
		$data['pid'] = '111111';
		$data['author_id'] = 'suych';
		$pic->data($data)->add();
		
		$this->display("Tpl/upload/Upload/uploadPage.html");
	}
}
?>