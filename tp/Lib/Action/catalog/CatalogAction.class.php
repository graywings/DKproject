<?php
class CatalogAction extends BaseAction
{

	public function index()
	{
		$this->display();
	}
	
	/**
	 * 查询分类下的所有图片
	 */
	public function getPictures(){
		//100000000 ferrari
		$this->display();
	}

	/**
	 * 查询可专注的分类
	 * 只查询目录类型为1的所有分类
	 */
	public function getFollowCatalogs()
	{
		$cat = new MongoModel( "cate" );
		$data = $cat->field( "url,name,code" )->select( array(
			'where' => array(
				"type" => "1" 
			),
			"order" => array(
				"num" => 1 
			) 
		) );
		
		$this->ajax( $this->data );
	}

	/**
	 * 查询所有分类，可能包括 Popular，Everything，Other等目录
	 * 包括目录类型为1的和其他的。
	 */
	public function getPageCatalogs()
	{
		$cat = new MongoModel( " cate " );
		$this->data = $cat->field( "url,name,code" )->select( array(
			'where' => array(
				"type" => "1" 
			),
			"order" => array(
				"num" => 1 
			) 
		) );
		
		$this->ajax( $this->data );
	}

}