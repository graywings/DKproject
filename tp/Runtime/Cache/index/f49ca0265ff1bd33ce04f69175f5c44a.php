<?php if (!defined('THINK_PATH')) exit();?>﻿<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>label</title>
<link rel="stylesheet" type="text/css" media="screen"
	href="__APP____PUBLIC__/main/css/jQuery.iPicture.css" />
<script type="text/javascript"
	src="__APP____PUBLIC__/main/js/jquery-1.6.2.min.js"></script>
<script type="text/javascript"
	src="__APP____PUBLIC__/main/js/jquery-ui-1.8.16.custom.min.js"></script>
<script type="text/javascript"
	src="__APP____PUBLIC__/main/js/jQuery.iPicture.js"></script>
<style type="text/css">
</style>
<script type="text/javascript">
	$(function() {
		$("#iPicture").iPicture({
			animation : true,
			animationBg : "bgblack",
			animationType : "ltr-slide",
			pictures : [ "picture1" ],
			button : "moreblack",
			moreInfos : {
				"picture1" : [ {
					"id" : "tooltip1",
					"descr" : "furniture: 299$",
					"top" : "185px",
					"left" : "393px"
				}, {
					"id" : "tooltip2",
					"descr" : "sofa: 199$",
					"top" : "346px",
					"left" : "483px"
				}, {
					"id" : "tooltip3",
					"descr" : "silver candle: 2.99$",
					"top" : "461px",
					"left" : "556px"
				} ]
			},
			modify : false,
			initialize : true
		});

		$('#button_1').bind(
				'click',
				function() {
					var moreInfos = 'moreInfos:{';
					var picture = $('#picture1');
					var divs = $(picture).find('.more32');
					$.each(divs, function(index, value) {
						if (index > 0) {
							moreInfos = moreInfos + ',';
						}
						descr = $(value).find('input').val();
						if (descr == undefined) {
							descr = "";
						}
						topPosition = $(value).css('top');
						leftPosition = $(value).css('left');
						moreInfos = moreInfos + '{"id":"' + value.id
								+ '","descr":"' + descr + '","top":"';
						moreInfos = moreInfos + topPosition + '","left":"'
								+ leftPosition + '"';
						if (value.href) {
							moreInfos = moreInfos + ',"href":"'
									+ $('#' + value.id + ' a').attr('href')
									+ '"';
						}
						moreInfos = moreInfos + '}';
					});
					moreInfos = moreInfos + ']';
					moreInfos = moreInfos + '}';
					alert(moreInfos);
				});
	})
</script>
</head>
<body>
	<div id="pageContainer">
		<input type="button" id="button_1" value="保存"/>
			<h1>label</h1>
			<div id="slideshow">
				<div id="iPicture">
					<div class="slide">
						<!-- 						<img id="picture1" src="__APP____PUBLIC__/main/img/christmas.jpg" width="900px" height="528px"/> -->
						<div id="picture1"
							style="background: url('__APP____PUBLIC__/main/img/christmas.jpg') no-repeat scroll 0 0 #393737; width: 900px; height: 528px; position: relative; margin: 0 auto;"></div>
					</div>
					<br />
				</div>
			</div>
	</div>
</body>
</html>