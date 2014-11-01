<?php
class WallModel
{

	/**
	 * 根据uid修改 计数字段的 值
	 *
	 * @param unknown $uid
	 *        	用户uid
	 * @param unknown $field
	 *        	要修改计数的字段
	 * @param unknown $inc
	 *        	整数计数增加量，减少的时候为负数
	 */
	public function incWallCount($uid, $field, $inc)
	{
		$wall = new MongoModel( "wall" );
		$wall->save( array(
			$field => array(
				'inc',
				$inc 
			) 
		), array(
			'where' => array(
				'uid' => (float) $uid 
			),
			'limit' => 1 
		) );
	}

	/**
	 * 查询用户图片墙信息
	 * @param unknown $uid
	 * @return mixed
	 */
	public function queryWallByUid($uid)
	{
		$wm = new MongoModel( "wall" );
		$wall = $wm->find( array(
			'where' => array(
				"uid" => (float) $uid 
			) 
		) );
		
		return $wall;
	}

}