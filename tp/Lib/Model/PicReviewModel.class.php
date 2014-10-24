<?php
class PicReviewModel
{

	/**
	 * 根据图片pid查找所属图片的评论
	 *
	 * @param unknown $pic        	
	 */
	public function getPictureComments($pid, $limit = 5)
	{
		$pr = new MongoModel( "pic_review" );
		// 目前全部加载，之后可能需要新的页面来展示所有评论
		$prd = $pr->select( array(
			"where" => array(
				"pid" => (float) $pid 
			),
			"order" => array(
				"datetime" => - 1 
			) 
		) );
		
		$finalData = array();
		reset( $prd );
		while ( list ( $key, $val ) = each( $prd ) )
		{
			$val['picture'] = $pr->getDBRef( $val['picture'] );
			$val['user'] = $pr->getDBRef( $val['user'] );
			$finalData[$key] = $val;
		}
		return $finalData;
	}

	/**
	 * 根据id删除一条评论
	 * @param unknown $id 要删除的评论id
	 * @return 删除成功返回true， 删除失败返回false； id不存在当错删除成功；
	 */
	public function deletePicComment($id)
	{
		if (empty( $id ))
		{
			return true;
		}
		$pr = new MongoModel( "pic_review" );
		$pr->delete( array(
			"where" => array(
				"_id" => $id 
			) 
		) );
		$error = $pr->getDbError();
		if(empty($error)){
			return true;
		}
		return $error;
	}

	/**
	 * 给pid图片评论
	 *
	 * @param unknown $pid
	 *        	图片唯一标识
	 * @param unknown $text
	 *        	评论信息
	 * @param unknown $uid
	 *        	用户唯一标识
	 */
	public function comment($pid, $text, $uid, $reply = null, $reply_author = null)
	{
		$comment = array();
		$comment['pid'] = (float) $pid;
		$comment['uid'] = (float) $uid;
		$comment['content'] = $text;
		$comment['datetime'] = date( "y/m/d h:i:s", time() );

		$um = new UserModel();
		$ud = $um->getUserByUid( $uid );
		$cm = new MongoModel( "pic_review" );
		if (! empty( $reply ))
		{
			$reply = $cm->createDBRef( "pic_review", new MongoId( $reply ) );
		}
		if (! empty( $reply_author ))
		{
			$reply_author = $cm->createDBRef( "user", new MongoId( $ud["_id"] ) );
		}
		$comment['reply'] = $reply;
		$comment['reply_author'] = $reply_author;
		
		$pm = new PictureModel();
		$pd = $pm->getPictureByPid( $pid );
		$comment['picture'] = $cm->createDBRef( "picture", new MongoId( $pd["_id"] ) );
		$comment['user'] = $cm->createDBRef( "user", new MongoId( $ud["_id"] ) );
		
		$cm->add( $comment );
		$error = $cm->getDbError();
		if (empty( $error ))
		{
			$comment['picture'] = $cm->getDBRef( $comment['picture'] );
			$comment['user'] = $cm->getDBRef( $comment['user'] );
			return $comment;
		}
		return $error;
	}

}