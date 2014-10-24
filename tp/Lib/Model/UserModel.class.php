<?php
class UserModel
{

	/**
	 * 根据uid获得用户信息
	 * 
	 * @param unknown $uid
	 *        	用户唯一标识
	 */
	public function getUserByUid($uid)
	{
		$u = new MongoModel( "user" );
		$user = $u->find( array(
			"where" => array(
				"uid" => (float) $uid 
			) 
		) );
		return $user;
	}

}