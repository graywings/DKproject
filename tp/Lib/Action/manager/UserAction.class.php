<?php
class UserAction extends Action
{

	public function query()
	{
		$user = new MongoModel( "user" );
		$this->data = $user->field( "_id,name,email,age,sex" )->limit( 0, 100 )->select();
		$this->display();
	}

	public function add()
	{
		$data = array(
			'name' => 'Paul',
			'email' => 'monsterdark725@gmail.com',
			'age' => 27,
			'sex' => '1' 
		);
		$user = new MongoModel( "user" );
		$user->add( $data );
	}

	public function edit()
	{
		// $data = array (
		// '_id' => '53f87f809aeadee004000029',
		// 'name' => 'Paul Kim',
		// 'email' => 'xiaozhi725@hotmail.com',
		// 'age' => 24,
		// 'sex' => '2'
		// );
		$data = array(
			'width' => '236px' 
		);
		$user = new MongoModel( "picture" );
// 		$user->save( $data );
		$user->where(array('author'=> 'Paul'))->save($data);
	}

	public function delete()
	{
		
	}

}