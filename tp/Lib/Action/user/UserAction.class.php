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

}