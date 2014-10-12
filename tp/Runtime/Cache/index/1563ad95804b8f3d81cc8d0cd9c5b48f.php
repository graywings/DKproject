<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html >
	<head>
		<title>图片互动平台</title>
<!-- 		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> -->
<!-- 		<meta name="robots" content="all"> -->
<!-- 		<meta name="author" content="tp"> -->
<!-- 		<meta http-equiv="pragma" content="no-cache"> -->
<!-- 		<meta http-equiv="Cache-Control" content="no-cache, must-revalidate"> -->
<!-- 		<meta http-equiv="expires" content="-1"> -->
		<link rel="stylesheet" href="__APP____PUBLIC__/main/css/base.css" type="text/css">
		<link rel="stylesheet" href="__APP____PUBLIC__/main/css/index.css" type="text/css">
		<script>
			var APP = "__APP__";
			var PUBLIC = "__PUBLIC__";
		</script>
		<script type="text/javascript" src="__APP____PUBLIC__/main/js/jquery-1.11.1.js"></script>
		<script type="text/javascript" src="__APP____PUBLIC__/main/js/jquery.pjax.js"></script>
		<script type="text/javascript" src="__APP____PUBLIC__/main/js/PostManager.js"></script>
		<script type="text/javascript" src="__APP____PUBLIC__/main/js/main.js"></script>
		<script type="text/javascript" src="__APP__/Tpl/index/Index/index.js"></script>
	</head>
	<body>
		<div id="body-wrapper">
			<div id="sidebar">
	<!-- 用户头像 -->
	<div class="user-box"></div>
	<!-- 菜单 -->
	<div class="nav catalog_nav">
		<a class="catalog_nav_link"> <i></i>
		</a>
	</div>
	<div class="nav catalog_nav1">
		<a class="catalog_nav_link1"> <i></i>
		</a>
	</div>

	<!-- 分类菜单 -->
	<div class="catalog_nav_div">
	</div>
	<div class="catalog_nav_div1">
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
	var m1 = $(".catalog_nav_link"),
	m2 = $(".catalog_nav_link1"),
	t1 = $(".catalog_nav_div"),
	t2 = $(".catalog_nav_div1");

	//将左侧匪类图标与分类菜单绑定
	new MenuShower({
		menu: m1,
		trigger: t1,
		showHandler: function(){
			t2.hide();
		}
	});
	new MenuShower({
		menu: m2,
		trigger: t2,
		clickShow: true,
		showHandler: function(){
			t1.hide();
		}
	});
</script>
			<div id="main-content">
				<div id="main-header">
	<div class="header">
		<a class="logo" href="__APP__">LOGO</a>
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
			<a class="upload-link">
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
	<div class="user-container">
		<ul>
			<li><a href="__APP__/upload/Upload/uploadPage">上传图片采集</a></li>
			<li><a href="javascript:alert('没做呢')">添加画板</a></li>
			<li><a href="javascript:alert('我靠，你还点！你点个毛线啊！')">安装采集工具</a></li>
			<li><a href="javascript:alert('你需要冷静下！')">扩展++</a></li>
		</ul>
	</div>
</div>
<script>
	var m_upload = $(".upload-link"),
	t_upload = $(".user-container");
	new MenuShower({
		menu: m_upload,
		trigger: t_upload,
		clickShow: true,
		showHandler: function(){
			t1.hide();
		}
	});
</script>

				<div id="main-body">
					<div class="imgcontainer" data-load-status="ready">
						
<!-- 						<div class="img-item" data-num="0" data-id="1000000031" style="left: 0px; top: 0px;" col="0"> -->
<!-- 							<a class="img-link" href="/tp/pic/1000000031"> -->
<!-- 								<img width="236px" height="177px" src="/tp/Public/main/img/test/236px/31.jpg" /> -->
<!-- 							</a> -->
<!-- 							<div class="img-description"> -->
<!-- 								<p> -->
<!-- 									123123<br/>123123 -->
<!-- 								</p> -->
<!-- 							</div> -->
<!-- 							<div class="img-author"> -->
<!-- 								<a> -->
<!-- 									<img width="34" src="__APP____PUBLIC__/main/img/wenze.jpg"/> -->
<!-- 									<div class="author"> -->
<!-- 										<div>123</div><div>123</div> -->
<!-- 									</div> -->
<!-- 								</a> -->
<!-- 							</div> -->
<!-- 						</div> -->
						
					</div>
					<div class="loadmore">
						<img src="http://www.masonrylayout.com/wp-content/plugins/wp-masonry-layout-pro/images/loader/wmli_loading_04.gif" class="loadimg" />
					</div>
				</div>
				<div class="detailcontainer">
					<div class="mask">
						<div class="spinner"></div>
					</div>
				</div>
				
				<div id="main-footer">
				</div>
			</div>
		</div>
	</body>
</html>