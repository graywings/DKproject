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
		
		$uarr = array(); // 关注的用户的uid集合
		$uearr = array(); // 关注用户相册排除关注的集合
		reset( $fudata );
		while ( list ( $k, $v ) = each( $fudata["users"] ) )
		{
			$uarr[] = $v["uid"];
			$uearr = array_merge( $uearr, $v["except"] );
		}
		
		$ubarr = array();
		if (empty( $uarr ))
		{
			$b = new MongoModel( "board" );
			$bd = $b->select( array(
				"where" => array(
					"uid" => $uarr 
				) 
			) );
			reset( $bd );
			while ( list ( $key, $val ) = each( $bd ) )
			{
				$ubarr[] = $val['bid'];
			}
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
		
		$ubarr = array_merge( $ubarr, $fbarr ); // 合并我关注的相册和我关注的人的相册
		$arr = array_diff( $ubarr, $uearr ); // 排除我关注的人中不排除的相册
		return $arr;
	}

	/**
	 * 通过pid查找该图片相关联的相册(也在这些相册中,通过转发移动的痕迹)
	 * 
	 * @param unknown $pid
	 *        	图片唯一标识
	 * @param unknown $uid
	 *        	用户唯一标识
	 * @param number $limit
	 *        	查询限制长度
	 * @param string $lastBid
	 *        	上一次查询最后的bid
	 * @return NULL|mixed
	 */
	public function queryRelateBoards($pid, $uid, $limit = null, $lastBid = null)
	{
		$bids = $this->queryRelateBids( $pid, $uid );
		if (empty( $bids ))
		{
			return null;
		}
		
		$b = new MongoModel( "board" );
		if (! empty( $limit ))
		{
			$b->limit( 0, $limit );
		}
		$whereOptions = array();
		if (! empty( $lastBid ))
		{//排序后移除已经查询过的bid
			rsort($bids);
			reset($bids);
			$num = array_search($lastBid, $bids);//数组搜索 上次查询的最小的值得下标
			reset($bids);
			$bids = array_slice($bids, $num+1);//数组截断已经查询过的记录
		}
		if(empty($bids)){
			return null;
		}
		$whereOptions['bid'] = array(
			'$in' => $bids 
		);
		$boards = $b->select( array(
			"where" => $whereOptions,
			"order" => array(
				"bid" => - 1 
			) 
		) );
		
		$fBoards = array();
		reset($boards);
		while(list($key, $val) = each($boards)){
			$val['user'] = $b->getDBRef($val['user']);
			$fBoards[$key] = $val;
		}
		
		return $fBoards;
	}

	/**
	 * 通过pid查找该图片相关联的相册bid(也在这些相册中,通过转发移动的痕迹)
	 *
	 * @param unknown $pid
	 *        	图片唯一标识
	 * @param unknown $uid
	 *        	用户唯一标识
	 * @return multitype:
	 */
	public function queryRelateBids($pid, $uid)
	{
		$boards = array();
		
		// 查找关联的相册， 在关联的相册中排除自己的相册及自己关注相册和自己关注的人的相册
		$prb = new MongoModel( "pic_relate_board" );
		$prbData = $prb->find( array(
			'where' => array(
				'pid' => (float) $pid 
			) 
		) );
		
		$ownBids = $this->queyrOwnBoardBids( $uid );
		$followBids = $this->queryFollowBoardsIncludeUsers( $uid );
		
		$mergeBids = array_merge( $ownBids, $followBids ); // 合并自己的相册和关注的相册
		
		if (empty( $prbData ))
		{
			return $boards;
		}
		
		while ( list ( $key, $val ) = each( $prbData['boards'] ) )
		{
			if (! in_array( $val['bid'], $mergeBids ))
			{
				$boards[] = $val['bid'];
			}
		}
		
		return $boards;
	}

	/**
	 * 查询我的所有相册的bid数组
	 *
	 * @param unknown $uid
	 *        	用户唯一标识
	 * @param unknown $lastBid
	 *        	相册查询bid起始条件
	 * @param int $limit
	 *        	mongo查询长度
	 * @return NULL|multitype:Ambigous <>
	 */
	public function queyrOwnBoardBids($uid)
	{
		$boards = $this->queryOwnBoards( $uid );
		
		if (empty( $boards ))
		{
			return null;
		}
		
		$bids = array();
		reset( $boards );
		while ( list ( $key, $val ) = each( $boards ) )
		{
			$bids[] = $val['bid'];
		}
		return $bids;
	}

	/**
	 * 查询用户所属的所有相册
	 *
	 * @param unknown $uid
	 *        	用户唯一标识
	 * @return mixed
	 */
	public function queryOwnBoards($uid)
	{
		$b = new MongoModel( "board" );
		$whereOptions = array();
		$whereOptions["uid"] = (float) $uid;
		if (! empty( $lastBid ))
		{
			$whereOptions["bid"] = array(
				'$lt' => (float) $lastBid 
			);
		}
		if (! empty( $limit ))
		{
			$b->limit( 0, $limit );
		}
		$boards = $b->select( array(
			"where" => $whereOptions,
			"order" => array(
				"bid" => - 1 
			) 
		) );
		
		reset($boards);
		while(list($key, $val) = each($boards)){
			$val['user'] = $b->getDBRef($val['user']);
			$boards[$key] = $val;
		}
		
		return $boards;
	}
	
	/**
	 * 创建相册
	 * @param unknown $data
	 */
	public function createBoard($data){
		
		$bm = new MongoModel("board");

		$count = $bm->findAndModifyForInc('count', 'bid', 1);
		$data['bid'] = $count['bid'];
		
		if(!empty($data['catalog'])){
			$cm = new CatalogModel();
			$catalog = $cm->queryCatalogByCode($data['catalog']);
			$data['catalog_code'] = $data['catalog'];
			$data['catalog'] = $bm->createDBRef("catalog", new MongoId($catalog['_id']));
		}else{
			$data['catalog'] = null;
			$data['catalog_code'] = null;
		}
		
		$um = new UserModel();
		$user = $um->getUserByUid($data['uid']);
		$data['user'] = $bm->createDBRef('user', new MongoId($user['_id']));
		
		$data['pic_count'] = 0;
		$data['followers_count'] = 0;
		$data['sort'] = 0; //排序保存问题？？？
		
		$data['edit_author'] = array();
		$data['cover'] = array('35px'=> null, 'orgi'=> null);

		if(empty($data['allow_view']))
			$data['allow_view'] = 1;
		if(empty($data['allow_se']))
			$data['allow_se'] = 1;
		
		$data['datetime'] = date( "y/m/d h:i:s", time() );
		$data['update_time'] = null;

		
		$bm->add($data);
		
		$wm = new WallModel();
		$wm->incWallCount($data['uid'], 'count.board', 1);
		
		return $data['bid'];
	}
	
	/**
	 * 根据bid查找相册信息
	 * @param unknown $bid 相册bid
	 * @return mixed
	 */
	public function queryBoardByBid($bid){
		$bm = new MongoModel('board');
		$board = $bm->find( array(
			'where' => array(
				'bid' => (float) $bid 
			) 
		) );
		
		$board['user'] = $bm->getDBRef($board['user']);
		
		return $board;
	}

}
?>