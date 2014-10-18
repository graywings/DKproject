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
	'DB_PORT' => '27017',
	'DB_USER' => '',
	'DB_PWD' => '',
	'DB_PREFIX' => '',
	'DB_SQL_LOG' => true, // SQL执行日志记录
	
	'URL_MODEL'=>2,
	
	'URL_ROUTER_ON' => true, 
	'URL_ROUTE_RULES' => array(
		'pic/:pid' => 'index/Index/getPicture',
		'catalog/:catalog' => 'catalog/Catalog/index',
		'userwall/:username' => 'user/User/index',
	),
);
?>