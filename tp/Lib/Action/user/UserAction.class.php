<?php
class UserAction extends Action
{

	public function index()
	{
		$username = $_GET['username'];
		if(empty($username)){
			redirect("/index/Index/index");
			return ;
		}
		$this->display();
	}
	
	public function wall(){
		$uid = $_GET['uid'];
		$wm = new WallModel();
		$wall = $wm->queryWallByUid($uid);
		if(empty($wall)){
			//如果通过uid没有找到用户图片墙，转到404
			
		}
		
		$bm = new BoardModel();
		$boards = $bm->queryOwnBoards($uid);
		
		$this->assign("wall",$wall);
		$this->assign("boards",$boards);
		$this->display();
	}

}