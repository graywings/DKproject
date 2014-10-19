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
		$pic = new MongoModel( "picture" );
		$pic_liked = new MongoModel( "pic_liked" );
		//查看这个人有没有喜欢过这个图片
		$pld = $pic_liked->select( array(
			'where' => array(
				'pid' => (float) $pid,
				'users.uid' => (float) $uid 
			) 
		) );
		
		//通过pid和uid查找无记录，有可能是这个人没有喜欢过这个图片，也有可能是这个图片没有被任何喜欢过这个图片
		//如果有记录说明这个人喜欢过这个图片，需要取消这个图片的喜欢
		if (empty( $pld ))
		{
			//进一步判断这个图片有没有被喜欢过
			$pld = $pic_liked->select( array(
				'where' => array(
					'pid' => (float) $pid 
				) 
			) );
			if (empty( $pld ))
			{
				//这个pid的图片没有被任何人喜欢过
				//保存图片被用户喜欢记录
				
				//保存用户喜欢图片记录
			}
			else
			{
				//这个pid的图片没有被这个人喜欢过
				//保存图片被用户喜欢记录
				
				//保存用户喜欢图片记录
			}

			//图片数量+1
			$pic->save( array(
				'like_count' => array(
					'inc',
					1 
				) 
			), array(
				'where' => array(
					'pid' => (float) $pid 
				),
				'limit' => 1 
			) );
			//图片所属用户图片墙 被喜欢的图片数量+1
			//用户图片想喜欢图片数量+1
		}else{
			//取消图片的喜欢

			//图片数量-1
			$pic->save( array(
				'like_count' => array(
					'inc',
					1
				)
			), array(
				'where' => array(
					'pid' => (float) $pid
				),
				'limit' => 1
			) );
			//图片所属用户图片墙 被喜欢的图片数量-1
			//用户图片想喜欢图片数量-1
		}
	}

}