$(function(){
	// 目录查询
	getCatalogs();
	// 按钮绑定点击事件
	bindClick();
	
	var im = $(".sidebar-board-wall").wf({
		_name : 'detail-sidebar',
		_template: 'board',
		_container : '.sidebar-board-wall',
		_url : APP + '/index/Index/getBoardPictures',
		_postData: {'bid': bid},
		_width: 70,
		_computeCol: false,
		_col: 3,
		_marginHeight: 1,
		_complete: function(){
			window.onresize();
		},
		_scrollBind: function(){
			$(".sidebar-board-pics").bind('scroll', function() {
				if($(".sidebar-board-wall").attr("data-load-status") == "ready")
				{
					if(($(".sidebar-board-pics").scrollTop() + $(".sidebar-board-pics").outerHeight()) >= $(".sidebar-board-wall").outerHeight() - 20){
						wfl['detail-sidebar'].request();
					}
				}
			});
		},
		_getLastPid: function(){
			return $(".sidebar-board-wall").find(">a:last").attr("data-id");
		}
	});
	
});

window.onresize = function(){
	if($(window).width() - 50 > 500)
		$("#main-header").width($(window).width() - 50);
	else
		$("#main-header").width(500);
}

function bindClick(){
	$(".like-btn").bind("click",function(){
		var o = $(this);
		var manager = new PostManager();
		manager.url = APP+"/pic/"+o.attr("data-id")+"/like";
		manager.complete = function(data){
			
		}
		manager.error = function(data){
			
		}
		manager.post();
	});
}
