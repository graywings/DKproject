<?php
class LoginAction extends BaseAction
{

	public function index(){
		if(!isset($_SESSION['uid'])) {
			$this->display();
		}else{
			$this->redirect('Index');
		}
	}
	public function checkLogin(){
		$email= $_POST['email'];
		$pwd= $_POST['pwd'];
		$user = new MongoModel( "user" );
		$userData = $user->find( array(
			"where" => array(
				"email" =>  $email,
				"passwd" => $pwd
			) 
		) );
		if(empty($userData))
		{
			$data["status"] = 0;
		}
		else{
			$user = array();
			$user['nick'] = $userData['nick'];
			$user['signature'] = $userData['signature'];
			$_SESSION['uid'] = $userData["uid"];
			$_SESSION['avatar'] = $userData["avatar"];
			$_SESSION['user'] = $user;
			$data["status"] = 1;
		}
		//传回前台
// 		$data['userData'] = $userData;
		$this->ajax($data);
	}
	
	public function logout(){
		unset($_SESSION['uid']);
		$this->redirect('Index');
	}
}
?>