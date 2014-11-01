$(function(){
	getCatalogs();
	
	var im = $(".imgcontainer").wf({
		_name : 'board-index',
		_template: 'index',
		_container : '.imgcontainer',
		_url : APP + '/board/'+bid+"/?limit=10",
		_isPost : false,
		_maxCol : 4,
		_minCol : 3,
		_pushExtraElement: function(){
			return $(".imgcontainer .img-item:first-child");
		},
		_complete: function(){
//			wfl['board-index'].rebuild();
		},
		_scrollBind: function(){
			$(window).bind('scroll', function() {
				if($(".imgcontainer").attr("data-load-status") == "ready")
				{
					if($(window).scrollTop() >= $('.imgcontainer').offset().top + $('.imgcontainer').outerHeight() - window.innerHeight){
						wfl['board-index'].request();
					}
				}
			});
		},
		_getLastId: function(){
			return $(".imgcontainer").find(">div:last").attr("data-id");// 获取最后一个pid
		}
	});
	
});