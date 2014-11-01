<?php
return array(
	//'配置项'=>'配置值'
	//模块配置
	'APP_GROUP_LIST' => 'index,user,catalog,upload,login',
	'DEFAULT_GROUP' => 'index',
	
	//数据库配置
	'DB_TYPE' => 'mongo',
	'DB_HOST' => 'localhost',
	'DB_NAME' => 'tagsmedia',
// 	'DB_NAME' => 'test',
	'DB_PORT' => '27017',
	'DB_USER' => '',
	'DB_PWD' => '',
	'DB_PREFIX' => '',
	'DB_SQL_LOG' => true, // SQL执行日志记录
	
	'URL_MODEL'=>2,
	
	//路由规则配置
	'URL_ROUTER_ON' => true, 
	'URL_ROUTE_RULES' => array(
		'/^pic\/(\d+)$/' => 'index/Pic/getPicture?pid=:1',
		'/^pic\/(\d+)\/like$/' => 'index/Pic/likePicture?pid=:1',
		'/^pic\/(\d+)\/comment$/' => 'index/Pic/getPictureComments?pid=:1',
		'pic/comment/:id' => 'index/Pic/deletePictureComment',
		'/^pic\/(\d+)\/relateBoard$/' => 'index/Board/queryPicRelateBoards?pid=:1',
		'/^pic\/(\d+)\/relateBoard\/(\d+)$/' => 'index/Board/queryPicRelateBoards?pid=:1&lastBid=:2',
		'/^pic\/(\d+)\/relatePics$/' => 'index/Pic/queryRelatePics?pid=:1',
		'/^pic\/(\d+)\/relatePics\/(\d+)$/' => 'index/Pic/queryRelatePics?pid=:1&lastPid=:2',
		'board/create' => 'index/Board/createBoard',
		'/^board\/(\d+)$/' => 'index/Board/getBoard?bid=:1',
		'catalog/:catalog' => 'catalog/Catalog/index',
		'wall/:uid' => 'user/User/wall',
	),
	
	'MAIL_ADDRESS'=>'lb19900803@yeah.net', // 邮箱地址
	'MAIL_SMTP'=>'smtp.yeah.net', // 邮箱SMTP服务器
	'MAIL_LOGINNAME'=>'lb19900803@yeah.net', // 邮箱登录帐号
	'MAIL_PASSWORD'=>'libing19900803', // 邮箱密码
	'MAIL_CHARSET'=>'UTF-8',//编码
	'MAIL_AUTH'=>true,//邮箱认证
	'MAIL_HTML'=>true,//true HTML格式 false TXT格式
);
?>