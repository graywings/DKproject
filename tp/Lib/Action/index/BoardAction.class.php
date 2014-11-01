<?php
class BoardAction extends BaseAction
{

	/**
	 * 查询图片相关联相册进行推荐
	 */
	public function queryPicRelateBoards()
	{
		$pid = $_GET['pid'];
		if ($this->isAjax())
		{
			$uid = $_SESSION["uid"];
			$limit = 4;
			$lastBid = $_GET['lastBid'];
			
			$bm = new BoardModel();
			$boards = $bm->queryRelateBoards( $pid, $uid, $limit, $lastBid );
			
			$this->ajax( $boards );
		}
		else
		{
			$this->redirect( "/pic/" . $pid );
		}
	}

	/**
	 * 创建专辑
	 */
	public function createBoard()
	{
		if ($this->isAjax())
		{
			$uid = $_SESSION['uid'];
			if (empty( $uid ))
			{
				$this->redirect( '/login/Login' );
			}
			$title = $_POST['title'];
			$description = $_POST['description'];
			$catalog = $_POST['catalog'];
			$view = $_POST['view'];
			$search = $_POST['search'];
			
			$data = array(
				'title' => $title,
				'description' => $description,
				'allow_view' => $view,
				'allow_se' => $search,
				'catalog' => $catalog,
				'uid' => $uid 
			);
			
			$bm = new BoardModel();
			$result = $bm->createBoard( $data );
			
			$this->ajax( array(
				'bid' => $result 
			) );
		}
		else
		{
			// 如果不是ajax请求的话，返回错误页面
		}
	}

	/**
	 * 查看相册
	 */
	public function getBoard()
	{
		$bid = $_GET['bid'];
		
		if ($this->isAjax())
		{
			$limit = $_GET['limit'];
			$lastPid = $_GET['pid'];
			
			$pm = new PictureModel();
			$pics = $pm->queryBoardPicturesByBid($bid, $limit, $lastPid);
			
			$this->ajax($pics);
		}
		else
		{
			$bm = new BoardModel();
			$board = $bm->queryBoardByBid( $bid );
			
			// 如果没有找到相册记录,没有进行处理
			
			$this->assign( "board", $board );
			$this->display();
		}
	}

}