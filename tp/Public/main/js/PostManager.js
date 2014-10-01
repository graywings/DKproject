
/**
 * 异步请求对象
 * 目前此类在ajax请求后返回数据方面有问题需要修改。 json格式返回有问题。里面内容需要再eval一次。
 */
var PostManager = function(){
	this.async = true;
	this.url = "";
	this.postData = {};
	this.setAsync = function(async){
		this.async = async;
	}
	this.setUrl = function(url){
		this.url = url;
	}
	this.setPostData = function(postData){
		this.postData = postData;
	}
	
	this.post = function(params){
		if(params){
			this.postData = params;
		}
		var $this = this;
		$.ajax({
			type : "POST",
			async: this.async,
			dataType : "json",
			url : this.url,
			data : this.postData,
			success : function(msg) {
//				alert(JSON.stringify(msg));
				if(msg &&msg.status == '1'){
					if (msg && msg.data){
						var data = JSON.stringify(msg.data);
////						contentStr =contentStr.replace(/null/g,"\"\"");
						msg.data = eval('('+JSON.parse(data)+')');
					}
					$this.complete(msg.data);
				}else{
					$this.error(msg);
				}
			},
			error : function(msg) {
				$this.error(msg);
			}
		});
	};
	this.complete = function(data){};
	this.error = function(data){};

}