var wfl = wfl || {};
/**
 * 瀑布流插件wf
 */
(function(){
	var wf = function(options) {
		this._name = "";
		this._template = "";
		this._container = "";
		this._url = "";
		this._postData = {
			limit: 10 // 默认请求10个图片
		};
		this._box = "";
		this._width = 250; // 首页默认图片宽度236px+两边各7px的宽   
		this._containerWidth = 0;
		this._containerHeight = 0;
		this._computeCol = true;//是否需要根据浏览器宽度计算显示列数，默认计算
		this._col = 5;
		this._minCol = 2;
		this._maxCol = 10;
		this._arr = new Array();
		this._num = 0;
		this._marginHeight = 14;
		this._complete = null;//加载成功后调用方法
		this._scrollBind = null;//绑定瀑布流滚动条方法
		
		$.extend(true, this, options);
	};
	$.fn.wf = function(options){
		var o = new wf(options);
		
		o.request();
		
		if(o._computeCol)
			o._col = o.computeCol();
		
		wfl[o._name] = o;
		
		o._box = $(this);
		
		
		if(o._scrollBind){
			o._scrollBind();
		}
		
		return o;
	}
	
	wf.prototype = {
		/**
		 * 计算页面可以显示的列数
		 */
		computeCol: function(){
			this._containerWidth = this.getContainerWidth();
			this._containerHeight = $(this._container).height();
			return Math.max(this._minCol, Math.min(this._maxCol, Math.floor(this._containerWidth / this._width)));
		},
		/**
		 * 获得容器宽度
		 */
		getContainerWidth: function(){
			if($(window).width() - 50 > this._width * this._minCol){
				return $(window).width() - 50;
			}else{
				return 500;
			}
		},
		setContainerHeight: function(){
			this._containerHeight = parseInt(wfl[this._name]._arr[wfl[this._name]._col-1].split("."));
			$(this._container).height(this._containerHeight + "px");
		},
		setContainerWidth: function(){
			$(this._container).width((this._col * this._width) + "px");
		},
		/**
		 * 计算header宽度，以及计算是否需要重新排列瀑布流容器中的图片
		 */
		resize: function(){
			if($(window).width() - 50 > this._width * this._minCol)
				$("#main-header").width($(window).width() - 50);
			else
				$("#main-header").width(this._width * this._minCol);
			
			var col = this.computeCol();
			$(this._container).width(this._width * col);
			
			if(col!=this._col){
				this._col = col;
				this._arr = new Array();
				this.rebuild();
				this.setContainerHeight();
				this.setContainerWidth();
			}
		},
		/**
		 * 浏览器大小变化时，根据当前瀑布流容器中已有的图片进行重新排列计算
		 */
		rebuild: function(){
			var $this = this;
			$(this._container).children().each(function(i,e){
				if(i<$this._col){
					$(e).css("left",((i % $this._col) * $this._width) + "px");
					$(e).css("top","0px");
					$(e).attr("col",i);
					$this._arr.push(($(e).height() + $this._marginHeight) + "." + i);
					$this._arr.sort(function(a,b){ return parseInt(a) - parseInt(b);});
				}else{
					var f = $this._arr.shift();
					$(e).css("left", ((parseInt(f.split(".")[1]) % $this._col ) * $this._width) + "px");
					$(e).css("top", parseInt(f.split(".")[0]) + "px");
					$(e).attr("col",f.split(".")[1]);
					$this._arr.push(($(e).height() + $this._marginHeight + parseInt(f.split(".")[0])) + '.' + parseInt(f.split(".")[1]));
					$this._arr.sort(function(a,b){ return parseInt(a) - parseInt(b);});
				}
			});
		},
		/**
		 * 在瀑布流对象中添加图片单元 items 表示图片单元格式化html所需的数据集合
		 */
		pushItems: function(items){
			if(items){
				for(var id in items){
					var item = items[id];
					wfl[this._name].addItem(this._num,$(wfl[this._name].formatItem(item)));
				}
			}
			this.setContainerHeight();
		},
		/**
		 * 格式化瀑布流容器中每个元素的html结构 item 表示每个html元素格式化时，需要的数据对象。
		 */
		formatItem: function(item){
			if(this._template == "index"){
				var html = '<div class="img-item" data-id="'+item.pid+'" data-num="'+this._num+'" >';
						html += '<a class="img-link" href="'+APP+'/pic/'+item.pid+'">';
							html += '<img width="236" height="'+item.pic['236px'].height+'" src="'+APP+PUBLIC+item.pic['236px'].url+'" />';
						html += '</a>';
						html += '<div class="img-description">';
							html += '<p>'+item.description+'</p>';
						html += '</div>';
						html += '<div class="img-author">';
							html += '<a href="'+APP+'/userwall/'+item.user.uid+'">';
								html += '<img width="34" src="'+APP+PUBLIC+item.user.avatar["50px"]+'" />';
								html += '<div class="author">';
									html += '<div><a href="'+APP+'/userwall/'+item.user.uid+'">'+item.user.nick+'</a></div><div>'+item.board.title+'</div>';
								html += '</div>';
							html += '</a>';
						html += '</div>';
					html += '</div>';
				return html;
			}else if(this._template == "board"){
				var html = '<a class="borad-pics-a" data-id="'+item.pid+'" data-num="'+this._num+'" >';
						html += '<div class="maskhover"></div>';
						html += '<img width="68" src="'+APP+PUBLIC+item.pic['236px'].url+'"/>';
					html += '</a>';
				return html;
			}
		},
		/**
		 * 将一个格式化好的html的jquery对象添加到指定瀑布流区域中，并计算当前显示位置。还有计算下个图片要显示的位置。
		 * $this._arr.push和$this._arr.sort方法计算下个图片显示位置
		 * $this._arr.shift()获得数组按高度的列数排序的数组中高度第一个元素，即top为最小的 num 表示瀑布流容器中第几个元素
		 * item 表示格式化后html的jquery对象
		 */
		addItem: function(num, item){
			var $this = this;
			$this._box.append(item);
			if(num<$this._col){
				item.css("left",((num % $this._col) * $this._width) + "px");
				item.css("top","0px");
				item.attr("col",num);
				$this._arr.push((item.height() + $this._marginHeight) + "." + num); 
				$this._arr.sort(function(a,b){ return parseInt(a) - parseInt(b);});
			}else{
				var f = $this._arr.shift();// 我要放的上面的元素
				item.css("left", ((parseInt(f.split(".")[1]) % $this._col ) * $this._width) + "px");
				item.css("top", parseInt(f.split(".")[0]) + "px");
				item.attr("col",f.split(".")[1]);
				$this._arr.push((item.height() + $this._marginHeight + parseInt(f.split(".")[0])) + '.' + parseInt(f.split(".")[1]));
				$this._arr.sort(function(a,b){ return parseInt(a) - parseInt(b);});
			}
			wfl[this._name]._num++;
		},
		/**
		 * 请求图片
		 */
		request: function(){
			var $this = this;
			$($this._container).attr("data-load-status","loading");//瀑布流请求设置成请求中
			var manager = new PostManager();
			manager.url = $this._url;
			manager.complete = function(data){
				if(data){
					$("#loadmore").hide();
					$this.pushItems(data);
					
					if($this._complete){
						$this._complete();
					}
					//数据加载完成后将瀑布流请求状态改成准备中
					$($this._container).attr("data-load-status","ready");
				}else{
					//没有可以继续展示的数据了，停止瀑布流其你去
					$($this._container).attr("data-load-status","stop");
				}
			}
			if($this._getLastPid){
				$this._postData.lastPid = $this._getLastPid();
			}
			$("#loadmore").show();
			manager.post($this._postData);
		}
	}
})();


// 菜单与图标绑定显示隐藏事件。
function MenuShower(options){
	var defaultOptions = {
		menu : {}, // 菜单图标
		trigger: {}, // 菜单
		clickShow: false, // true表示绑定click时间， false表示绑定滑入滑出事件
		hideDelay: 500, // 隐藏延迟时间
		showDelay: 0, // 显示延迟时间 ，目前没有实现显示延迟
		showHandler: null, // 显示时调用方法
		hideHandler: null // 隐藏时调用方法
	};
	var init = function(options){
		var option = $.extend(defaultOptions, options, true);
		var $this = this;
		this.timer = {};
		if(option.clickShow){
			option.menu.bind("click",function(e){
				option.trigger.show();
				if(typeof option.showHandler == "function"){
					option.showHandler();
				}
				e.stopPropagation();
			});
			$(document).bind("click",function(){
				if(typeof option.hideHandler == "function"){
					option.hideHandler();
				}
				option.trigger.hide();
			});
			option.trigger.bind("click",function(e){
				e.stopPropagation();
			});
		}else{
			option.menu.bind("mouseenter",function(){
				clearTimeout($this.timer);
				options.trigger.show();
				if(typeof options.showHandler == "function"){
					options.showHandler();
				}
			});
			option.trigger.bind("mouseenter",function(){
				clearTimeout($this.timer);
				options.trigger.show();
				if(typeof options.showHandler == "function"){
					options.showHandler();
				}
			});
			option.menu.bind("mouseleave",function(e){
				$this.timer = setTimeout(function(){
					option.trigger.hide();
					if(typeof options.hideHandler == "function"){
						options.hideHandler();
					}
				},option.hideDelay);
				
			});
			option.trigger.bind("mouseleave",function(e){
				$this.timer = setTimeout(function(){
					option.trigger.hide();
					if(typeof options.hideHandler == "function"){
						options.hideHandler();
					}
				},option.hideDelay);
			});
		}
	}
	init(options);
}

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
				if (i == 0)
					html += "<ul>";
				html += "<li><a href='" + APP + "/" + darr[i].url + "'>"
						+ darr[i].name + "</a></li>";
				if (i == limit - 1)
					html += "</ul>";
			} else if (i < limit * 2) {
				if (i == limit)
					html += "<ul>";
				html += "<li><a href='" + APP + "/" + darr[i].url + "'>"
						+ darr[i].name + "</a></li>";
				if (i == limit * 2 - 1)
					html += "</ul>";
			} else {
				if (i == limit * 2)
					html += "<ul>";
				html += "<li><a href='" + APP + "/" + darr[i].url + "'>"
						+ darr[i].name + "</a></li>";
				if (i == length - 1)
					html += "</ul>";
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

