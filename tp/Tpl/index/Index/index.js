$(function() {
	// 目录查询
	getCatalogs();

	// 瀑布流显示
	var im = $(".imgcontainer").wf({
		_name : 'index',
		_container : '.imgcontainer',
		_url : APP + '/index/Index/getPictures'
	});

	// pjax事件绑定
	$(".mask").bind("pjax:beforeSend", function() {
		$(document.body).css("overflow-y", "hidden");
		$(".detailcontainer").show();
		$(".mask .spinner").show();
		$(".mask").bind("click", function(e) {
			history.back();
			e.preventDefault();
		});
	});
	$(".mask").bind("pjax:end", function() {
		$(".mask .spinner").hide();
		$(".pic-container").bind("click", function(e) {
			e.stopPropagation();
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
/*
 * 查询目录
 */
function getCatalogs() {
	var manager = new PostManager();
	manager.url = APP + "/index/Index/getFollowCatalogs";
	manager.complete = function(data) {
		var html = "";
		var darr = [];
		for (d in data) {
			darr.push(data[d]);
		}
		var length = darr.length;
		var limit = Math.ceil(length / 3);
		for (var i = 0; i < length; i++) {
			if (i < limit) {
				if(i==0) html += "<ul>";
				html += "<li><a href='"+APP+"/"+darr[i].url+"'>"+darr[i].name+"</a></li>";
				if(i==limit-1) html += "</ul>";
			} else if (i < limit * 2) {
				if(i==limit) html+= "<ul>";
				html += "<li><a href='"+APP+"/"+darr[i].url+"'>"+darr[i].name+"</a></li>";
				if(i==limit*2-1) html += "</ul>";
			} else {
				if(i==limit*2) html += "<ul>";
				html += "<li><a href='"+APP+"/"+darr[i].url+"'>"+darr[i].name+"</a></li>";
				if(i==length-1) html+= "</ul>";
			}
		}
		$(".catalog_nav_div").html(html);
	}
	manager.error = function(data) {
		alert(JSON.stringify(data));
	}
	var postData = {};
	manager.post(postData);
}