<?php
class CatalogModel
{

	/**
	 * 根据分类code查找兴趣分类
	 * @param unknown $code
	 * @return mixed
	 */
	public function queryCatalogByCode($code)
	{
		$cm = new MongoModel( "catalog" );
		$catalog = $cm->find( array(
			'where' => array(
				'code' => $code 
			) 
		) );
		return $catalog;
	}

}