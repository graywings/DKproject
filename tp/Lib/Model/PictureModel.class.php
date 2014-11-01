<?php
class PictureModel
{

	/**
	 * 查询详情页面图片相关联图片
	 *
	 * @param unknown $bid        	
	 * @param unknown $pid        	
	 * @param unknown $limit        	
	 */
	public function queryRelatePics($pid, $uid, $lastPid = null, $limit = 10)
	{
		$bm = new BoardModel();
		$bids = $bm->queryRelateBids( $pid, $uid );
		if (empty( $bids ))
		{
			return null;
		}
		$p = new MongoModel( "picture" );
		
		$whereOptions = array();
		$whereOptions['bid'] = array(
			'$in' => $bids 
		);
		if (! empty( $lastPid ))
		{
			$whereOptions['pid'] = array(
				'$lt' => $lastPid 
			);
		}
		$p->limit( 0, $limit );
		$pics = $p->select( array(
			'where' => $whereOptions,
			'order' => array(
				'pid' => - 1 
			) 
		) );
		
		$finalData = array();
		if (! empty( $pics ))
		{
			reset( $pics );
			while ( list ( $key, $val ) = each( $pics ) )
			{
				$val['user'] = $p->getDBRef( $val['user'] );
				$val['board'] = $p->getDBRef( $val['board'] );
				$finalData[$key] = $val;
			}
		}
		else
		{
			return null;
		}
		
		return $finalData;
	}

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
		$data = null;
		$pic = new MongoModel( "picture" );
		if (empty( $pid ))
		{
			$data = $pic->limit( 0, $limit )->select( array(
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
			$data = $pic->limit( 0, $limit )->select( array(
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
		
		if(!empty($data)){
			reset($data);
			while(list($key, $val) = each($data)){
				$val['user'] = $pic->getDBRef($val['user']);
				$val['board'] = $pic->getDBRef($val['board']);
				$data[$key] = $val;
			}
			return $data;
		}
		return null;
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
		$p = new MongoModel( "picture" );
		$u = new MongoModel( "user" );
		// 查找用户
		$user = $u->find( array(
			'where' => array(
				'uid' => (float) $uid 
			) 
		) );
		// 查找图片
		$pic = $p->find( array(
			'where' => array(
				'pid' => (float) $pid 
			) 
		) );
		
		// 查看这个人有没有喜欢过这个图片
		$pic_liked = new MongoModel( "pic_liked" );
		$pld = $pic_liked->find( array(
			'where' => array(
				'pid' => (float) $pid,
				'users.uid' => (float) $uid 
			) 
		) );
		
		$return = array();
		// 通过pid和uid查找无记录，有可能是这个人没有喜欢过这个图片，也有可能是这个图片没有被任何喜欢过这个图片
		// 如果有记录说明这个人喜欢过这个图片，需要取消这个图片的喜欢
		if (empty( $pld ))
		{
			$return['like'] = 1;
			// 进一步判断这个图片有没有被喜欢过
			$pld = $pic_liked->select( array(
				'where' => array(
					'pid' => (float) $pid 
				) 
			) );
			
			if (empty( $pld ))
			{
				// 这个pid的图片没有被任何人喜欢过
				// 保存图片被用户喜欢记录
				// 新增该图片被喜欢的一条记录
				$pic_liked->add( array(
					'pid' => (float) $pid,
					'users' => array(
						array(
							'uid' => (float) $uid,
							'user' => $pic_liked->createDBRef( "user", new MongoId( $user['_id'] ) ) 
						) 
					) 
				) );
			}
			else
			{
				// 这个pid的图片没有被这个人喜欢过
				// 保存图片被用户喜欢记录
				$pic_liked->save( array(
					'users' => array(
						'addToSet',
						array(
							'uid' => (float) $uid,
							'user' => $pic_liked->createDBRef( "user", new MongoId( $user['_id'] ) ) 
						) 
					) 
				), array(
					'where' => array(
						'pid' => (float) $pid 
					),
					'limit' => 1 
				) );
			}
			// 保存用户喜欢图片记录。
			// 用户喜欢集合中,就算一个用户无喜欢的图片，也会存在一条该用户的记录，因此直接修改就行，不需要新增。
			$like_pic = new MongoModel( "like_pic" );
			$like_pic->save( array(
				'pics' => array(
					'addToSet',
					array(
						'pid' => (float) $pid,
						'pic' => $like_pic->createDBRef( 'picture', new MongoId( $pic['_id'] ) ) 
					) 
				) 
			), array(
				'where' => array(
					'uid' => (float) $uid 
				),
				'limit' => 1 
			) );
			
			// 图片数量+1
			$this->incPictureCount( $pid, "like_count", 1 );
			// 图片所属用户图片墙 被喜欢的图片数量+1
			$wm = new WallModel();
			$wm->incWallCount( $pic['uid'], "count.liked_pic", 1 );
		}
		else
		{
			$return['like'] = - 1;
			// 取消图片的喜欢
			// 取消 图片被用户喜欢集合中的用户
			$pic_liked->save( array(
				'users' => array(
					'pull',
					array(
						'uid' => (float) $uid,
						'user' => $pic_liked->createDBRef( 'user', new MongoId( $user['_id'] ) ) 
					) 
				) 
			), array(
				'where' => array(
					'pid' => (float) $pid 
				),
				'limit' => 1 
			) );
			
			// 取消用户喜欢图片集合中的图片
			$like_pic = new MongoModel( "like_pic" );
			$like_pic->save( array(
				'pics' => array(
					'pull',
					array(
						'pid' => (float) $pid,
						'pic' => $like_pic->createDBRef( 'picture', new MongoId( $pic['_id'] ) ) 
					) 
				) 
			), array(
				'where' => array(
					'uid' => (float) $uid 
				),
				'limit' => 1 
			) );
			
			// 图片数量-1
			$this->incPictureCount( $pid, "like_count", - 1 );
			// 图片所属用户图片墙 被喜欢的图片数量-1
			$wm = new WallModel();
			$wm->incWallCount( $pic['uid'], "count.liked_pic", - 1 );
		}
		return $return;
	}

	/**
	 * 根据pid字段 修改field字段的的计数
	 *
	 * @param string|float $pid
	 *        	图片pid
	 * @param string $field
	 *        	picture集合字段
	 * @param int $inc
	 *        	整数计数增加量，减少的时候为负数
	 */
	public function incPictureCount($pid, $field, $inc)
	{
		$pic = new MongoModel( "picture" );
		$pic->save( array(
			$field => array(
				'inc',
				$inc 
			) 
		), array(
			'where' => array(
				'pid' => (float) $pid 
			),
			'limit' => 1 
		) );
	}

	/**
	 * 根据pid查询图片信息
	 *
	 * @param unknown $pid        	
	 * @return mixed
	 */
	public function getPictureByPid($pid)
	{
		$pic = new MongoModel( "picture" );
		$picData = $pic->find( array(
			"where" => array(
				"pid" => (float) $pid 
			) 
		) );
		return $picData;
	}

}