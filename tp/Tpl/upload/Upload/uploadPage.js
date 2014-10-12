$(function(){
	$("#uploadfile").change(function(){
		
		if (window.navigator.userAgent.indexOf("MSIE") >= 1)
		{ //ie
			
		}
		else if (window.navigator.userAgent.indexOf("Firefox") >= 1)　　 
		{ //firefox
			var file = $('#uploadfile')[0].files[0];
			var url = window.URL.createObjectURL(file);
	        $("#tupianyulanqu").html('<div id="picture1" style="background-color:#b22111"><img src="'+url+'"/></div>').autoIMG();
        }
    });
});
