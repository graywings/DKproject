<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=9">
		<meta name="robots" content="all">
		<meta name="author" content="tp">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="Cache-Control" content="no-cache, must-revalidate">
		<meta http-equiv="expires" content="-1">
		<title>图片互动平台</title>
		<script type="text/javascript" src="__APP____PUBLIC__/main/js/jquery1.7.1.js"></script>
		<link rel="stylesheet" href="__APP____PUBLIC__/main/css/base.css" type="text/css">
		<link rel="stylesheet" href="__APP____PUBLIC__/main/css/index.css" type="text/css">
	</head>
	<body>
		<div id="body-wrapper">
			<div id="sidebar">
	<!-- 用户头像 -->
	<div class="user-box"></div>
	<!-- 菜单 -->
	<div class="nav catalog_nav">
		<a class="catalog_nav_link">
			<i></i>
		</a>
	</div>
	<div class="catalog_nav_div">
		<ul>
			<li><a href="__APP__/catalog/pmsj">平面设计</a></li>
			<li><a href="__APP__/catalog/ch">插画</a></li>
			<li><a href="__APP__/catalog/uisj">UI设计</a></li>
			<li><a href="__APP__/catalog/mn ">美女</a></li>
			<li><a href="__APP__/catalog/mw/mt">美文/美图</a></li>
			<li><a href="__APP__/catalog/jj/zs">家居/装饰</a></li>
			<li><a href="__APP__/catalog/yy/dy/ts">音乐/电影/图书</a></li>
			<li><a href="__APP__/catalog/hs/hl">婚纱/婚礼</a></li>
			<li><a href="__APP__/catalog/sh/bk">生活/百科</a></li>
			<li><a href="__APP__/catalog/tz">童真</a></li>
		</ul>
		<ul>
			<li><a href="__APP__/catalog/fs/jp/xc">服饰/街拍/袖长</a></li>
			<li><a href="__APP__/catalog/qw">趣味</a></li>
			<li><a href="__APP__/catalog/dm">动漫</a></li>
			<li><a href="__APP__/catalog/mr/mx">名人/明星</a></li>
			<li><a href="__APP__/catalog/cp/dp">潮品/单品</a></li>
			<li><a href="__APP__/catalog/ms/cp">美食/菜谱</a></li>
			<li><a href="__APP__/catalog/ty/yd">体育/运动</a></li>
			<li><a href="__APP__/catalog/zx/mz">造型/美妆</a></li>
			<li><a href="__APP__/catalog/sj/ts">数据/图示</a></li>
		</ul>
		<ul>
			<li><a href="__APP__/catalog/lx/gl">旅行/攻略</a></li>
			<li><a href="__APP__/catalog/sy">摄影</a></li>
			<li><a href="__APP__/catalog/yx">游戏</a></li>
			<li><a href="__APP__/catalog/sg/by">手工/布艺</a></li>
			<li><a href="__APP__/catalog/jzsj">建筑设计</a></li>
			<li><a href="__APP__/catalog/dp">搭配</a></li>
			<li><a href="__APP__/catalog/gysj">工业设计</a></li>
			<li><a href="__APP__/catalog/cw">宠物</a></li>
			<li><a href="__APP__/catalog/rwys">人文艺术</a></li>
		</ul>
	</div>
</div>
<script>
	new MenuShower({
		menu: $(".catalog_nav_link"),
		trigger: $(".catalog_nav_div")
	});
</script>
			<div id="main-content">
				<div id="main-header">
	<div class="header">
		<a class="logo" href="javascript:void(0)">LOGO</a>
		<div class="left-header">
<!-- 			<a class="categories-link" href="javascript:void(0);"> -->
<!-- 				<em></em> -->
<!-- 			</a> -->
			<form id="search-form">
				<input type="text" >
				<a class="search-link" href="javascript:void(0);" ></a>
			</form>
		</div>
		<div class="right-header">
			<a class="upload-link" href="__APP__/index/Index/uploadPage">
				<em></em>
			</a>
			<div>
				<a class="logout" href="javascript:void(0)">
					<em></em>
				</a>
				<a class="notification-link" href="javascript:void(0)">
					<em></em>
				</a>
			</div>
		</div>
	</div>
</div>
<!-- <div class="user-container" style="display: none;"> -->
<!-- 	<div class="group"> -->
<!-- 		<a href="javascript:void(0);">我的专辑</a> -->
<!-- 	</div> -->
<!-- 	<div class="group"> -->
<!-- 		<a href="javascript:void(0);">找朋友</a> -->
<!-- 		<a href="javascript:void(0);">我关注的人</a> -->
<!-- 		<a href="javascript:void(0);">我的粉丝</a> -->
<!-- 	</div> -->
<!-- 	<div class="group"> -->
<!-- 		<a href="javascript:void(0);">账号设置</a> -->
<!-- 		<a href="javascript:void(0);">退出登录</a> -->
<!-- 	</div> -->
<!-- </div> -->

				<div id="main-body">
					<form action="__APP__/index/Index/upload" enctype="multipart/form-data" method="post">
						<input type="file" name="picture" />
						<input type="submit" value="提交" />
					</form>
				</div>
				
				<div id="main-footer">
				</div>
			</div>
		</div>
	</body>
</html>