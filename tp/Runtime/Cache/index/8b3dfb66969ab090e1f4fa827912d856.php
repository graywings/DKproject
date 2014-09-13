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
		<script type="text/javascript" src="__PUBLIC__/main/js/jquery1.7.1.js"></script>
		<link rel="stylesheet" href="__PUBLIC__/main/css/base.css" type="text/css">
		<link rel="stylesheet" href="__PUBLIC__/main/css/index.css" type="text/css">
	</head>
	<body>
		<div id="body-wrapper">
			
			<div id="sidebar">
				
			</div>
			<div id="main-content">
				<div id="main-header">
					<div class="header">
						<a class="logo" href="javascript:void(0)">LOGO</a>
						<div class="left-header">
							<a class="categories-link" href="javascript:void(0);">
								<em></em>
								<span class="categories">Categories</span>
							</a>
							<form id="search-form">
								<input type="text" >
								<a class="search-link" href="javascript:void(0);" ></a>
							</form>
						</div>
						<div class="right-header">
							<a class="upload-link" href="javascript:void(0);">
								<em></em>
								<span class="upload">Upload</span>
							</a>
							<div>
								<a class="setting-link" href="javascript:void(0)">
									<em></em>
									<span class="setting">Setting</span>
								</a>
								<a class="notification-link" href="javascript:void(0)">
									<em></em>
									<span class="notification">Notification</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div id="main-body">
					<form action="__URL__/upload" enctype="multipart/form-data" method="post">
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