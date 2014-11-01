$(function() {
	// 目录查询
	getCatalogs();

	// 瀑布流显示
	var im = $(".imgcontainer").wf({
		_name : 'index',
		_template: 'index',
		_container : '.imgcontainer',
		_url : APP + '/index/Index/getPictures',
		_complete: function(){
			wfl['index'].resize();
			$(document).pjax(".img-link", ".mask", { fragment: '.piccontainer'});
		},
		_scrollBind: function(){
			$(window).bind('scroll', function() {
				if($(".imgcontainer").attr("data-load-status") == "ready")
				{
					if($(window).scrollTop() >= $('.imgcontainer').offset().top + $('.imgcontainer').outerHeight() - window.innerHeight){
						wfl['index'].request();
					}
				}
			});
		},
		_getLastId: function(){
			return $(".imgcontainer").find(">div:last").attr("data-id");// 获取最后一个pid
		}
	});

	// pjax事件绑定
	$(".mask").bind("pjax:beforeSend", function() {
		$(document.body).css("overflow-y", "hidden");
		$(".detailcontainer").show();
		$(".mask .spinner").show();
		$(".mask").bind("click", function(e) {
			history.back();
			//阻止冒泡
			if (e && e.stopPropagation) {
				// W3C取消冒泡事件
				e.stopPropagation();
			} else {
				// IE取消冒泡事件
				window.event.cancelBubble = true;
			}
			if (e && e.preventDefault) {
				e.preventDefault();
			} else {
				window.event.returnValue = false;
			}
		});
	});
	$(".mask").bind("pjax:complete", function(data) {
		$(".mask .spinner").hide();
		init();
		$(".pic-container").bind("click", function(e) {
			//阻止冒泡
			if (e && e.stopPropagation) {
				// W3C取消冒泡事件
				e.stopPropagation();
			} else {
				// IE取消冒泡事件
				window.event.cancelBubble = true;
			}
			if (e && e.preventDefault) {
				e.preventDefault();
			} else {
				window.event.returnValue = false;
			}
		});
	});
	$(".mask").bind("pjax:popstate", function(data) {
		if (data.direction == "forward") {
			$(document.body).css("overflow-y", "hidden");
			$(".detailcontainer").show();
		} else if (data.direction == "back") {
			$(document.body).css("overflow-y", "auto");
			$(".detailcontainer").hide();
		}
	});
});