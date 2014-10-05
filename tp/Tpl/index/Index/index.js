$(function() {
	//目录查询
//	getCatalogs();
	
	// 瀑布流显示
	var im = $(".imgcontainer").wf({
		_name : 'index',
		_container : '.imgcontainer',
		_url : APP+'/index/Index/getPictures'
	});
	
	// pjax事件绑定
	$(".mask").bind("pjax:beforeSend", function() {
		$(document.body).css("overflow-y", "hidden");
		$(".detailcontainer").show();
		$(".mask .spinner").show();
	});
	$(".mask").bind("pjax:end", function() {
		$(".mask .spinner").hide();
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
/*
 * 查询目录
 */
function getCatalogs(){
	var manager = new PostManager();
	manager.url = APP+"/catalog/Catalog/getFollowCatalogs";
	manager.complete = function(data){
//		alert(JSON.stringify(data));
	}
	manager.error = function(data){
//		alert(JSON.stringify(data));
	}
	var postData = {};
	manager.post(postData);
}