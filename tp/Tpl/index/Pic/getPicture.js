function init(){
	// 目录查询
	getCatalogs();
	
	if(bid){
		//同一个相册的其他图片展示
		var im = $(".sidebar-board-wall").wf({
			_name : 'detail-sidebar',
			_template: 'boardPics',
			_container : '.sidebar-board-wall',
			_url : APP + '/index/Pic/getBoardPictures',
			_postData: {'bid': bid},
			_width: 70,
			_computeCol: false,
			_col: 3,
			_marginHeight: 2,
			_complete: function(){
				$(".borad-pics-a[data-id='"+pid+"']").addClass("board-pic-selected");
				if($(".sidebar-board-pics").height()>$(".sidebar-board-wall").height()){
					$(".sidebar-board-wall").css("margin-left","3px");
				}else{
					$(".sidebar-board-wall").css("margin-left","0px");
				}
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
			_getLastId: function(){
				return $(".sidebar-board-wall").find(">a:last").attr("data-id");
			}
		});
	}
	
	if(pid){
		//推荐相册
		var im = $(".relate-board-container").wf({
			_name : 'detail-relateBoard',
			_template: 'board',
			_isPost: false,
			_container : '.relate-board-container',
			_url : APP+"/pic/"+pid+"/relateBoard/",
			_width: 250,
			_computeCol: false,
			_col: 4,
			_marginHeight: 14,
			_complete: function(data){
				if(!(data) || data.length==0){
					$(".board-load-more").hide();
					$(".board-load-none").css("display","block");
				}else{
					$(".relate-board").show();
				}
			},
//			_scrollBind: function(){
//			},
			_getLastId: function(){
				return $(".relate-board-container").find(".board:last").attr("data-id");
			}
		});
		//加载更多关联相册
		$(".board-load").on("click",".board-load-more",function(){
			im.request();
		});
		
		var pm = $(".relate-pics-container").wf({
			_name: 'detail-relatePics',
			_template: 'index',
			_isPost: false,
			_container: '.relate-pics-container',
			_url : APP+"/pic/"+pid+"/relatePics/",
			_width: 250,
			_computeCol: false,
			_col: 4,
			_complete: function(data){
				if(!(data)){
					$(".relate-pics").hide();
				}
			},
			_scrollBind: function(){
				
			},
			_getLastId:function(){
				return null;
			}
		});
	}
	
	getPicComments();

	// 按钮绑定点击事件
	bindEvent();
}

window.onresize = function(){
	if($(window).width() - 50 > 500)
		$("#main-header").width($(window).width() - 50);
	else
		$("#main-header").width(500);
}

function bindEvent(){
	//绑定喜欢事件
	$(".like-btn").bind("click",function(){
		var o = $(this);
		var manager = new PostManager();
		manager.url = APP+"/pic/"+o.attr("data-id")+"/like";
		manager.complete = function(data){
			if(data.status==1){
				$(".like-btn .num").each(function(){
					$(this).text(parseInt($(this).text())+data.like);
				});
			}
		}
		manager.error = function(data){
			alert(JSON.stringify(data));
		}
		manager.post();
	});
	//绑定评论事件
	$(".cmt-btn").bind("click",function(e){
		var o = $(this);
		var replyAuthor = $("#reply_author").val();
		var reply = $("#reply").val();
		var text = $(".comment-text").val();
		if (text == "") {
			alert("请输入");
			return;
		}
		var manager = new PostManager();
		manager.url = APP+"/index/Pic/comment";
		manager.complete = function(data){
			if(data.status==1){
				var html = formatComment(data.comment);
				$(".comments").prepend(html);
				$(".comment-text").val("");
				$(".comment-text").attr("placeholder","添加一条评论");
				$("#reply").val("");
				$("#reply_author").val("");
				$(document).off("click","#body-wrapper");
				$(".comment-container").off("click",".comment-text");
			}
		}
		manager.error = function(data){
			alert(JSON.stringify(data));
		}
		var postData = {"pid": o.attr("data-id"), "text": text};
		if(replyAuthor && reply){
			postData.replyAuthor = replyAuthor;
			postData.reply = reply;
		}
		manager.post(postData);
		//因为提交评论有可能是一个回复，需要暂停冒泡。如不暂停冒泡可能又变成单纯的评论。
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
	//绑定点击评论滑动到评论输入区域
	$(".comment-btn").bind("click",function(){
		//评论输入区域top - 屏幕的一半高度
		var top = parseInt($(".comment-text").offset().top) - parseInt(($(window).height() - 50) / 2);
		$("html,body").animate({scrollTop:top},1000);
		$(".comment-text").focus();
	});
	
	
	//绑定显示 评论回复和删除按钮     删除功能事件
	$(".comments").on("mouseenter",".cmt",function(){
		$(this).find(".comment-btns").addClass("cmt-btns-hover");
	}).on("mouseleave",".cmt",function(){
		$(this).find(".comment-btns").removeClass("cmt-btns-hover");
	}).on("click",".cmt-delete",function(){
		var o = $(this);
		var m = new PostManager();
		m.url = APP+o.attr("url");
		m.isPost = false;
		m.complete = function(data){
			if(data.status==1){
				//删除该评论
				o.closest(".cmt").remove()
			}
		}
		m.error = function(data){
			alert(JSON.stringify(data));
		}
		m.post();
	}).on("click",".cmt-reply",function(e){
		var o = $(this);
		$(".comment-btn").click();
		$(".comment-text").attr("placeholder","回复"+o.attr("data-author")+"：");
		$("#reply").val(o.attr("data-id"));
		$("#reply_author").val(o.attr("data-author-id"));
		$(document).on("click","#body-wrapper",function(){
			$(".comment-text").attr("placeholder","添加一条评论");
			$("#reply").val("");
			$("#reply_author").val("");
			$(document).off("click","#body-wrapper");
			$(".comment-container").off("click",".comment-text");
		});
		$(".comment-container").on("click",".comment-text",function(e){
			//点击输入区域阻止冒泡
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
		//点击回复按钮阻止冒泡
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
}

function getPicComments(){
	if(pid){
		var manager = new PostManager();
		manager.url = APP+"/pic/"+pid+"/comment";
		manager.complete = function(data){
			if(data){
				var html = "";
				for(var i in data){
					var item = data[i];
					html += formatComment(item);
				}
				$(".comments").append(html);
			}
		}
		manager.error = function(data){
			alert(JSON.stringify(data));
		}
		manager.post();
	}
}

/**
 * 格式化评论页面html结构
 * @param item 一天评论的json对象
 * @returns {String} html字符串
 */
function formatComment(item){
	var html = '<div class="pic-body-detail pic-comment-container cmt">';
	html+= '<div class="pic-comment">';
		html+= '<a class="i" href="javascript:void(0)">';
			html+= '<img width="50" src="'+APP+PUBLIC+item.user.avatar['50px']+'" />';
		html+= '</a>';
		html+= '<div class="comment-container">';
			html+= '<div>';
				html+= '<a href="#">'+item.user.nick+"</a>";
				if(item.reply_author){
					html+= '&nbsp;<span class="cmt-time">回复</span>&nbsp;<a href="#">'+item.reply_author.nick+'</a>'
				}
				html+= '&nbsp<span class="cmt-time">'+item.datetime+'</span>';
			html+= '</div>';
			html+= '<p>';
				html+= item.content;
			html+= '</p>';
			html+= '<div class="comment-btns">';
				html+= '<a class="cmt-reply" data-id="'+item._id+'" data-author-id="'+item.user.uid+'" data-author="'+item.user.nick+'" url="/pic/reply/'+item._id+'" title="回复">回复</a>&nbsp;';
				html+= '<a class="cmt-delete" data-id="" url="/pic/comment/'+item._id+'" title="删除">删除</a>';
			html+= '</div>';
		html+= '</div>';
	html+= '</div></div>';
	return html;
}
