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

}