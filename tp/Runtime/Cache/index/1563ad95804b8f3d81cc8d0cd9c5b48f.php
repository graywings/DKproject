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
		<script type="text/javascript" src="__APP____PUBLIC__/main/js/main.js"></script>
	</head>
	<body>
		<div id="body-wrapper">
			<div id="sidebar">
	<div class="user-box"></div>
</div>
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
					<div id="pjax-mask" class="mask"></div>
				</div>
				
				<div id="main-footer">
				</div>
			</div>
		</div>
	</body>
	<script>
		$(function(){
			
			var im = $(".imgcontainer").wf({
				_name : 'index',
				_container: '.imgcontainer',
				_url : '__APP__/index/Index/getPictures'
			});
			
			//pjax事件绑定
			$(".mask").bind("pjax:beforeSend",function(){
				$(document.body).css("overflow-y","hidden");
				$(".detailcontainer").show();
			});
			$(".mask").bind("pjax:popstate",function(data){
				if(data.direction=="forward"){
					$(document.body).css("overflow-y","hidden");
					$(".detailcontainer").show();
				}else if(data.direction=="back"){
					$(document.body).css("overflow-y","auto");
					$(".detailcontainer").hide();
				}
			});
		});
		
	</script>
</html>