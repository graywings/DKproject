$(function(){
	// 目录查询
	getCatalogs();
	bindEvent();
	initCatalog();
});

function bindEvent(){
	//绑定创建相册弹出事件
	$(".board-add-btn-line").bind("click",function(){
		$(".dialog,.dialog .create-board").show();
	});
	//绑定创建相册弹出框关闭事件
	$(".create-board .title span:last-child").bind("click",function(){
		$(".dialog,.dialog .create-board").hide();
	});
	//绑定选择分类事件
	$(".catalog-select").bind("click",function(e){
		$(".cataloglist").toggle();
		stopEvent(e);
	});
	//绑定选择分类事件
	$(".cataloglist ul").on("click","li",function(){
		$(".current-catalog").text($(this).find("span").text());
		$(".current-catalog").attr("data",$(this).attr("data"));
	});
	//绑定点击除选择兴趣区域外其他区域，取消选择分类事件
	$(".create-board").bind("click",function(){
		$(".cataloglist").hide();
	});
	$(".config-slider").bind("click",function(){
		if($(this).find("input[type='checkbox']").attr("checked") == "checked"){
			$(this).find("input[type='checkbox']").attr("checked", false);
			$(this).find(".mask-slider").css("right", "1px").css("left","");
		}else{
			$(this).find("input[type='checkbox']").attr("checked", true);
			$(this).find(".mask-slider").css("left", "1px").css("right","");
		}
	});
	//绑定创建相册事件
	$(".create-board-btn").bind("click",function(){
		var manager = new PostManager();
		manager.url = APP + "/board/create/";
		manager.complete = function(data) {
			if(data && data.bid){
				location.href = APP+"/board/"+data.bid+"/";
			}
		}
		manager.error = function(data) {
			alert(JSON.stringify(data));
		}
		var postData = {};
		if($("#title").val()!=""){
			postData['title'] = $("#title").val();
		}
		if($("#description").val()!=""){
			postData['description'] = $("#description").val();
		}
		if($(".current-catalog").attr("data")){
			postData['catalog'] = $(".current-catalog").attr("data");
		}
		if($("#view").attr("checked")=="checked"){
			postData['view'] = 1;
		}
		if($("#search").attr("checked")=="checked"){
			postData['search'] = 1;
		}
		//共同编辑没有考虑
		manager.post(postData);
	})
}

function initCatalog(){
	var manager = new PostManager();
	manager.url = APP + "/index/Index/getFollowCatalogs";
	manager.complete = function(data) {
		var html = "";
		var darr = [];
		for (d in data) {
			darr.push(data[d]);
		}
		var length = darr.length;
		for(var i=0;i<length;i++){
			html += '<li data="'+darr[i].code+'"><span>'+darr[i].name+'</span></li>';
		}
		$(".cataloglist ul").html(html);
	}
	manager.error = function(data) {
		alert(JSON.stringify(data));
	}
	var postData = {};
	manager.post(postData);
}