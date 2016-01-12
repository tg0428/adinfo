var userRoleId;
$(function(){
	
	//show system time
	showTime();
	
	bootbox.setLocale("zh_CN");
	 
	userRoleId = $("#roleId").val();
	
	$("#toolBarDiv").hide();
	
	showTips("登陆成功");
	
	$("#well").css('min-height','250px');
	$("#well").append("<a id='welcome' style='text-align:center;display:block;text-decoration:none;font-size:20px;padding-top:80px'>欢迎使用本管理系统</a>");
	
	//init tip
	$("[data-toggle='tooltip']").tooltip();
	
	//get user's dir
	$.post("getDir",function(result){
		$(result).each(function(index){
			var val = result[index];
			if(val.parent_id != 0){
				$("#p"+val.parent_id).after("<li><a id='c"+val.menu_id+"' href='javascript:void(0)' title='"+val.menu_dir+"' onclick='show(this)' style='color:#8B0000;font-size:14px'>&nbsp;&nbsp;&nbsp;"+val.menu_dir+"</a></li>");
				$("#a"+val.parent_id).removeAttr("href");
				$("#a"+val.parent_id).attr("onclick","showToggle()");
			}else {
				$("#operate_field").append("<li id='p"+val.menu_id+"'><a id='a"+val.menu_id+"' href='javascript:void(0)' onclick='show(this)' title='"+val.menu_dir+"' style='background-color:#00C5CD;color:#000000'>"+"*"+val.menu_dir+"</a></li>");
			}
		});
	},"json");
	
	//logout method 
	$("#logout").click(function(){
		bootbox.dialog({
			message: "您确定要注销吗？",
			title: "提示",
			buttons: {
				success: {
					 label: "注销并退出",
				     className: "btn-success",
				     callback: function(){
				    	$.post("/adinfo/validateUser/logout",function(data){
				    		if (data.valid == true || data.valid == "true"){
								location.href = '/adinfo/';
							}
				    	});
				     }
				}
			}
		});
	});
	
	$.loadSelect("#addAd");
	$.resetModal();
})