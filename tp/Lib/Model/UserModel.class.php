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

	/**
	 * 根据用户uid查找该用户关注的所有的用户信息
	 *
	 * @param unknown $uid
	 *        	用户唯一标识
	 */
	public function getUserFollowUsers($uid)
	{
		$fu = new MongoModel( "following_user" );
		$fud = $fu->find( array(
			"where" => array(
				"uid" => $uid 
			) 
		) );
		return $fud;
	}

}