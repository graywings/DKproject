var wfl = wfl || {};
/**
 * 瀑布流插件wf
 */
(function(){
	var wf = function(options) {
		this._name = "";
		this._container = "";
		this._url = "";
		this._postData = {
			limit: 10 //默认请求10个图片
		};
		this._box = "";
		this._width = 250; //默认图片宽度236px+两边各7px的宽
		this._containerWidth = 0;
		this._containerHeight = 0;
		this._col = 5;
		this._minCol = 2;
		this._maxCol = 10;
		this._arr = new Array();
		this._num = 0;
		this._marginHeight = 14;
		
		$.extend(true, this, options);
	};
	$.fn.wf = function(options){
		var o = new wf(options);
		
		o.request();
		
		o._col = o.computeCol();
		
		wfl[o._name] = o;
		
		o._box = $(this);
		
		$(window).bind('scroll', function() {
			if($(o._container).attr("data-load-status") == "ready")
			{
				if($(window).scrollTop() >= $('.imgcontainer').offset().top + $('.imgcontainer').outerHeight() - window.innerHeight){
					o.request();
				}
			}
		});
		
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
			if($(window).width() - 50 > 500){
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
			if($(window).width() - 50 > 500)
				$("#main-header").width($(window).width() - 50);
			else
				$("#main-header").width(500);
			
			var col = this.computeCol();
			$(this._container).width(this._width * col);
			
			if(col!=this._col){
				this._col = col;
				this._arr = new Array();
				this.rebuild();
				this.setContainerHeight();
				this.setContainerWidth();
			}
			$(this._container).attr("data-load-status","ready");
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
		 * 在瀑布流对象中添加图片单元
		 * items 表示图片单元格式化html所需的数据集合
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
		 * 格式化瀑布流容器中每个元素的html结构
		 * item 表示每个html元素格式化时，需要的数据对象。
		 */
		formatItem: function(item){
//			var html = '<div class="img-item" data-id="'+item.pid+'" data-num="'+this._num+'" >';
//					html += '<a class="img-link" href="'+APP+'/pic/'+item.pid+'">';
//						html += '<img width="236" height="'+item.image['236px'].height+'" src="'+APP+PUBLIC+item.image['236px'].file+'" />';
//					html += '</a>';
//					html += '<div class="img-description">';
//						html += '<p>'+item.description+'<br/>123123<br/>123123</p>';
//					html += '</div>';
//					html += '<div class="img-author">';
//						html += '<a href="javascript:void(0);">';
//							html += '<img width="34" src="'+APP+PUBLIC+'/main/img/wenze.jpg'+'" />';
//							html += '<div class="author">';
//								html += '<div>'+item.author_id+'</div><div>专辑</div>';
//							html += '</div>';
//						html += '</a>';
//					html += '</div>';
//				html += '</div>';
//			return html;
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
		},
		/**
		 * 将一个格式化好的html的jquery对象添加到指定瀑布流区域中，并计算当前显示位置。还有计算下个图片要显示的位置。
		 * $this._arr.push和$this._arr.sort方法计算下个图片显示位置
		 * $this._arr.shift()获得数组按高度的列数排序的数组中高度第一个元素，即top为最小的
		 * num 表示瀑布流容器中第几个元素
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
			$($this._container).attr("data-load-status","loading");
			var manager = new PostManager();
			manager.url = $this._url;
			manager.complete = function(data){
				if(data){
					$("#loadmore").hide();
					$this.pushItems(data);
					window.onresize = function(){
						$this.resize();
					}
					window.onresize();
					
					$(document).pjax(".img-link", ".mask", { fragment: '.piccontainer'});
				}
			}
			var mp = $($this._container).find(">div:last").attr("data-id");//获取最后一个pid
			$this._postData.lastPid = mp;
			$("#loadmore").show();
			manager.post($this._postData);
		}
	}
})();


//菜单与图标绑定显示隐藏事件。
function MenuShower(options){
	var defaultOptions = {
		menu : {}, //菜单图标
		trigger: {}, //菜单
		clickShow: false, //true表示绑定click时间， false表示绑定滑入滑出事件
		hideDelay: 500, //隐藏延迟时间
		showDelay: 0, //显示延迟时间 ，目前没有实现显示延迟
		showHandler: null, //显示时调用方法
		hideHandler: null //隐藏时调用方法
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

