<?php
class PictureModel
{

	/**
	 * 根据bid查询所有所属相册的图片
	 * 提供给图片详情页面查看，右侧小图片展示
	 *
	 * @param unknown $bid
	 *        	所属相册
	 * @param unknown $limit
	 *        	一次加载图片的个数
	 * @param unknown $pid
	 *        	加载图片的开始值
	 */
	public function queryBoardPicturesByBid($bid, $limit, $pid)
	{
		$pic = new MongoModel( "picture" );
		if (empty( $pid ))
		{
			return $pic->field( "pid,pic" )->limit( 0, $limit )->select( array(
				'where' => array(
					'bid' => (float) $bid 
				),
				'order' => array(
					'pid' => - 1 
				) 
			) );
		}
		else
		{
			return $pic->field( "pid,pic" )->limit( 0, $limit )->select( array(
				'where' => array(
					'bid' => (float) $bid,
					"pid" => array(
						'$lt' => (float) $pid 
					) 
				),
				'order' => array(
					'pid' => - 1 
				) 
			) );
		}
	}

	/**
	 * 图片被用户喜欢
	 *
	 * 图片的被喜欢数量加1
	 * 图片被用户喜欢集合中添加用户信息
	 * 用户喜欢图片集合中添加图片信息
	 *
	 * @param unknown $pid
	 *        	图片pid
	 * @param unknown $uid
	 *        	用户uid
	 */
	public function likePicture($pid, $uid)
	{
		// 图片喜欢数量+1
		$pic = new MongoModel( "picture" );
		$pic->save( array(
			'like_count' => array(
				'$inc' => 1 
			) 
		), array(
			'where' => array(
				'pid' => (float) $pid 
			),
			'limit' => 1 
		) );
	}

}