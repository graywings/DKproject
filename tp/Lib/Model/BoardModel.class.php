<?php
class BoardModel
{

	/**
	 * 通过用户uid查询该用户所有关注的相册id,排除用户关注下的except相册id
	 * 
	 * @return 相册bid的数组，如没有返回空数组
	 * @param unknown $uid        	
	 */
	public function queryFollowBoardsIncludeUsers($uid)
	{
		$fu = new MongoModel( "following_user" );
		$fudata = $fu->field( "users" )->find( array(
			'where' => array(
				'uid' => $uid 
			) 
		) );
		
		$barr = array();
		$uearr = array();
		reset( $fudata );
		while ( list ( $k, $v ) = each( $fudata["users"] ) )
		{
			$barr[] = $v["uid"];
			$uearr = array_merge( $uearr, $v["except"] );
		}
		
		$fb = new MongoModel( "following_board" );
		$fbdata = $fb->field( "boards" )->find( array(
			'where' => array(
				'uid' => $uid 
			) 
		) );
		
		$fbarr = array();
		reset( $fbdata );
		while ( list ( $k, $v ) = each( $fbdata["boards"] ) )
		{
			$fbarr[] = $v["bid"];
		}
		
		$barr = array_merge( $barr, $fbarr );
		$arr = array_diff( $barr, $uearr );
		return $arr;
	}

}
?>