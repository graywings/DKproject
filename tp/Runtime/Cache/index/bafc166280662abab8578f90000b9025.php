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
		<script type="text/javascript" src="__APP____PUBLIC__/main/js/jquery1.9.0.js"></script>
		<script type="text/javascript" src="__APP____PUBLIC__/main/js/jquery.pjax.js"></script>
		<script type="text/javascript" src="__APP____PUBLIC__/main/js/main.js"></script>
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
			<li>afqwef</li>
			<li>afqwef</li>
			<li>afqwef</li>
			<li>afqwef</li>
			<li>afqwef</li>
			<li>afqwef</li>
		</ul>
		<ul>
			<li>afqwef</li>
			<li>afqwef</li>
			<li>afqwef</li>
			<li>afqwef</li>
			<li>afqwef</li>
			<li>afqwef</li>
		</ul>
	</div>
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
					<div class="piccontainer">
						<div class="pic-container">
							<div class="lcontent">
								<div class="pic-detail-container">
									<div class="pic-detail">
										<div class="pic-detail-content">
											<div class="pic-header-detail">
												<a class="collect-btn btn">
													<span>收集<span class="num">10</span></span>
												</a>
												<a class="like-btn btn">
													<span>喜欢<span class="num">15</span></span>
												</a>
												<a class="comment-btn btn">
													<span>评论<span class="num">20</span></span>
												</a>
											</div>
											<div class="pic-body-detail">
												<a class="img-detail-link" href="javascript:void(0);">
													<div class="image-detail">
														<img style="width: ${pic.image.736px.width}px; height: ${pic.image.736px.height}px;margin: 0 auto;" src="__APP____PUBLIC__<?php echo ($pic["image"]["736px"]["file"]); ?>" />
													</div>
												</a>
											</div>
											<div class="pic-footer-detail">
												<a class="collect-btn btn">
													<span>收集<span class="num">10</span></span>
												</a>
												<a class="like-btn btn">
													<span>喜欢<span class="num">15</span></span>
												</a>
												<a class="comment-btn btn">
													<span>评论<span class="num">20</span></span>
												</a>
												<a class="report-btn btn">
													<span>举报</span>
												</a>
											</div>
										</div>
										<div class="pic-detail-description">
										
										</div>
										<div class="pic-detail-author">
										
										</div>
									</div>
								</div>
							</div>
							<div class="rsidebar">
								<div class="pic-sidebar">
									<div class="pic-board-container">
										<div class="board-header-container">
											<a class="i" href="javascript:void(0)">
												<img width="38" src="__APP____PUBLIC__/main/img/wenze.jpg" />
											</a>
											<a class="board-name" href="#">
												美女
											</a>
											<div class="author-name">
												文泽
											</div>
										</div>
										<div class="board-body-container">
										
										</div>
										<div class="board-footer-container">
											<a class="follow-btn btn">
												<span>关注此专辑</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="loadmore">
						<img src="http://www.masonrylayout.com/wp-content/plugins/wp-masonry-layout-pro/images/loader/wmli_loading_04.gif" class="loadimg" />
					</div>
				</div>
				
				<div id="main-footer">
				</div>
			</div>
		</div>
	</body>
</html>