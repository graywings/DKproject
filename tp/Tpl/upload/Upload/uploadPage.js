$(function(){
	$("#uploadfile").change(function(){
		
		if (window.navigator.userAgent.indexOf("MSIE") >= 1)
		{ //ie
			
		}
		else if (window.navigator.userAgent.indexOf("Firefox") >= 1)　　 
		{ //firefox
			var file = $('#uploadfile')[0].files[0];
			var url = window.URL.createObjectURL(file);
	        $(".upload-thumb").html('<img src="'+url+'"/>').autoIMG();
        }
    });
	
	$("#next").click(function(){
		$("#upload-url-main").css("display","none");
		$("#upload-board-main").css("display","inline");
	})
});
