/**
 * tableFunction : some functions about operating tables
 * author : GUOYIDONG
 * 
 * */
function show(object){
	var dir = $(object).attr('title');
	if(dir == '个人信息设置'){
		bootbox.dialog({
		    title : "修改密码",
		    message : "<div class='well ' style='margin-top:25px;'><span id='tips' style='color:red;margin:160px'></span>" +
		    		"<form class='form-horizontal' role='form'>" +
		    		"<div class='form-group'><label class='col-sm-3 control-label no-padding-right' for='txtOldPwd'>旧密码</label>" +
		    		"<div class='col-sm-9'><input type='text' id='txtOldPwd' placeholder='请输入旧密码' class='col-xs-10 col-sm-5' style='margin-bottom:10px'/></div></div>" +
		    		"<div class='space-4'></div><div class='form-group'><label class='col-sm-3 control-label no-padding-right' for='txtNewPwd1'>新密码</label>" +
		    		"<div class='col-sm-9'><input type='text' id='txtNewPwd1' placeholder='请输入新密码' class='col-xs-10 col-sm-5' style='margin-bottom:10px'/></div></div>" +
		    		"<div class='space-4'></div><div class='form-group'><label class='col-sm-3 control-label no-padding-right' for='txtNewPwd2'>确认新密码</label>" +
		    		"<div class='col-sm-9'><input type='text' id='txtNewPwd2' placeholder='再次输入新密码' class='col-xs-10 col-sm-5' style='margin-bottom:10px'/></div></div></form></div>",
		    buttons : {
		        "success" : {
		            "label" : "<i class='icon-ok'></i> 保存",
		            "className" : "btn-sm btn-success",
		            "callback" : function() {
		                var txt1 = $("#txtOldPwd").val();
		                var txt2 = $("#txtNewPwd1").val();
		                var txt3 = $("#txtNewPwd2").val();
		 
		                if(txt1 == "" || txt2 == "" || txt3 == ""){
		                    $("#tips").html("密码不能为空");
		                    return false;
		                }
		                if(txt2 != txt3 ){
		                	$("#tips").html("两次输入新密码不一致，请重新输入!");
		                    return false;
		                }
		                var info = {"oldPass":txt1,"newPass":txt2,"repeatPass":txt3};
		                $.post("/adinfo/validateUser/modify",info,function(data){
		                    bootbox.alert(data.msg);
		                },'json');
		            }
		        },
		        "cancel" : {
		            "label" : "<i class='icon-remove'></i> 取消",
		            "className" : "btn-sm btn-danger",
		            "callback" : function() { }
		        }
		    }
		});
	}
	if(dir == '广告信息管理'){
		if(userRoleId == 1 || userRoleId == 3){
			destroyTable();
			initAdinfoTable(managerAdOperateFormatter);
			refresh("#adinfoTable",'getAllAd');
		} else {
			$("#toolBarDiv").show();
			initAdinfoTable(adinfoOperateFormatter);
			refresh("#adinfoTable",'getAd');
		}
	}
	if(dir == '未通过审核用户'){
		destroyTable();
		initManagerTable(managerUserOperateFormatter);
		refresh("#managerTable",'getUsers?roleId=2&status=3');
	}
	if(dir == '通过审核用户'){
		destroyTable();
		initManagerTable(managerUserOperateFormatter);
		refresh("#managerTable",'getUsers?roleId=2&status=2');
	}
	if(dir == '未审核用户'){
		destroyTable();
		$("#toolBarDiv").hide();
		initManagerTable(managerUserOperateFormatter);
		refresh("#managerTable",'getUsers?roleId=2&status=1');
	}
	if(dir == '查看管理员名单'){
		destroyTable();
		$("#toolBarDiv").hide();
		initManagerTable(managerAssisterOperateFormatter);
		refresh("#managerTable",'/adinfo/validateUser/getAssister');
	}
	if(dir == '添加管理员'){
		bootbox.dialog({
		    title : "<i class='icon-plus'></i>&nbsp;添加管理员",
		    message : "<div class='well ' style='margin-top:25px;'><span id='tips' style='color:red;margin:160px'></span>" +
		    		"<form class='form-horizontal' role='form'>" +
		    		"<div class='form-group'>" +
		    		"<label class='col-sm-3 control-label no-padding-right' for='name'>管理员用户名</label>" +
		    		"<div class='col-sm-9'><input type='text' id='name' placeholder='输入管理员名称' class='col-xs-10 col-sm-5' style='margin-bottom:6px'/></div></div>" +
		    		"<div class='space-4'></div><div class='form-group'><label class='col-sm-3 control-label no-padding-right' for='password'>管理员密码</label>" +
		    		"<div class='col-sm-9'><input type='text' id='password' placeholder='请输入密码' class='col-xs-10 col-sm-5' /></div></div>" +
		    		"<div class='space-4'></div>",
		    buttons : {
		        "success" : {
		            "label" : "<i class='icon-ok'></i> 保存",
		            "className" : "btn-sm btn-success",
		            "callback" : function() {
		                var txt1 = $("#name").val();
		                var txt2 = $("#password").val();
		 
		                if(txt1 == "" || txt2 == "" ){
		                    $("#tips").html("信息填写不完整");
		                    return false;
		                }
		                var info = {"username":txt1,"password":txt2};
		                $.post("/adinfo/validateUser/addAssister",info,function(data){
		                	$("#tips").html(data.msg);
		                },'json');
		            }
		        },
		        "cancel" : {
		            "label" : "<i class='icon-info'></i> 取消",
		            "className" : "btn-sm btn-danger",
		            "callback" : function() { }
		        }
		    }
		});
	}
}

//destroy table
function destroyTable(){
	$("#managerTable").bootstrapTable('destroy');
	$("#adinfoTable").bootstrapTable('destroy');
}

//refresh table
function refresh(object,dataUrl){
	$(object).bootstrapTable('refresh',{url:dataUrl});
}

//submit ad to admin or assister
function submitAd(id){
	$.get("submitJudge?id="+id,function(result){
		if (result.valid == "true"){
			showTips(result.msg);
			refresh("#adinfoTable");
		}
	},"json");
}

//pass adinfo : 通过广告信息审核
function passAd(id){
	$.get("passAd?id="+id,function(result){
		if (result.valid == "true"){
			showTips(result.msg);
			refresh("#adinfoTable");
		}
	},"json");
}

//unpass adinfo : 不通过广告信息审核
function unPassAd(id){
	
	bootbox.dialog({
	    title : "<i class='icon-warning-sign'></i>&nbsp;请填写不通过理由",
	    message : "<div class='well ' style='margin-top:25px;'>" +
	    		"<form class='form-horizontal' role='form'>" +
	    		"<div class='form-group'>" +
	    		"<label class='col-sm-3 control-label no-padding-right' for='name'>理由</label>" +
	    		"<div class='col-sm-9'><input type='text' id='reason' placeholder='..' class='col-xs-10 col-sm-5' style='margin-bottom:6px'/></div></div>" ,
	    buttons : {
	        "success" : {
	            "label" : "<i class='icon-ok'></i> 确定",
	            "className" : "btn-sm btn-success",
	            "callback" : function() {
	                var txt1 = $("#reason").val();
	 
	                if(txt1 == ""){
	                    $("#reason").after("不能为空");
	                    return false;
	                }
	                var data = {"id" : id, "msg" : txt1};
	                $.post("unPassAd", data, function(result){
						if (result.valid == "true"){
							showTips(result.msg);
							refresh("#adinfoTable");
						}
					},"json");
	            }
	        },
	        "cancel" : {
	            "label" : "<i class='icon-remove'></i> 取消",
	            "className" : "btn-sm btn-danger",
	            "callback" : function() { }
	        }
	    }
	});
}

//pass user : 通过用户信息审核
function passUser(id){
	$.get("passUser?id="+id,function(result){
		if (result.valid == "true"){
			showTips(result.msg);
			refresh("#managerTable");
		}
	},"json")
}

//unpass user : 未通过用户信息审核
function unPassUser(id){
	$.get("unPassUser?id="+id,function(result){
		if (result.valid == "true"){
			showTips(result.msg);
			refresh("#managerTable");
		}
	},"json")
}

//delete ad
function deleteUser(id){
	sweetAlert({
		  title: "您确定要删除吗？",
		  text: "该操作不可还原！",
		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#DD6B55",
		  confirmButtonText: "删除",
		  cancelButtonText: "取消",
		  closeOnConfirm: false
		}, function(){
			$.get("delUser?id="+id,function(result){
				if(result.valid == 'true'){
					refresh("#managerTable");
					swal({
						  title: result.msg,   
						  type: "success",   
						  confirmButtonText: "确定"
					  });
				}
			},"json");
		});
}

//delete user
function deleteAd(id){
	sweetAlert({
		  title: "您确定要删除吗？",
		  text: "该操作不可还原！",
		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#DD6B55",
		  confirmButtonText: "删除",
		  cancelButtonText: "取消",
		  closeOnConfirm: false
		}, function(){
			$.get("delAd?id="+id,function(result){
				if(result.valid == 'true'){
					refresh("#adinfoTable");
					swal({
						  title: result.msg,   
						  type: "success",   
						  confirmButtonText: "确定"
					  });
				}
			},"json");
		});
}

function resetUser(id){
	var data = {"id" : id};
	$.post("/adinfo/validateUser/resetUser",data,function(result){
		showTips(result.msg);
	})
}

window.operateEvents = {
		'click #submit':function (e,value,row,index){
			//TODO
			submitAd(row.ad_id);
		},
		'click #deleteAd':function (e,value,row,index){
			deleteAd(row.ad_id);
		},
		'click #deleteUser':function (e,value,row,index){
			deleteUser(row.id);
		},
		'click #passUser':function (e,value,row,index){
			passUser(row.id);
		},
		'click #unPassUser':function (e,value,row,index){
			unPassUser(row.id);
		},
		'click #passAd':function (e,value,row,index){
			passAd(row.ad_id);
		},
		'click #unPassAd':function (e,value,row,index){
			unPassAd(row.ad_id);
		},
		'click #viewAllAd':function (e,value,row,index){
			//TODO
			var str = '{"ad_name" : "广告标题", "type_name" : "类型", "detail" : "广告详情", "status_name" : "审核状态", "name" : "审核人", "msg" : "消息", "contactor" : "联系人", "contact" : "联系方式", "company_name" : "公司名称", "lately_modify" : "最近修改时间"}';
			var jsonObj = JSON.parse(str);
			moreInfo.init("#moreInfo", row, "查看广告详情", "#infoTable", jsonObj, function(){
				$("#infoTable").find("tr").remove();
			});
		},
		'click #view':function (e,value,row,index){
			//TODO
			var str = '{"ad_name" : "广告标题", "type_name" : "类型", "detail" : "广告详情", "status_name" : "审核状态", "name" : "审核人", "msg" : "消息", "lately_modify" : "最近修改时间"}';
			var jsonObj = JSON.parse(str);
			moreInfo.init("#moreInfo", row, "查看广告详情", "#infoTable", jsonObj, function(){
				$("#infoTable").find("tr").remove();
			});
		},
		'click #viewUser':function (e,value,row,index){
			//TODO
			var str = '{"name" : "用户名", "contactor" : "联系人", "contact" : "联系方式", "company_name" : "公司名称", "register_time" : "注册时间", "status_name" : "审核状态"}';
			var jsonObj = JSON.parse(str);
			moreInfo.init("#moreInfo", row, "查看用户详情", "#infoTable", jsonObj, function(){
				$("#infoTable").find("tr").remove();
			});
		},
		'click #modify':function (e,value,row,index){
			//TODO
			ad.modify(row, "#type", "#adName", "#detail",function(){
				$("#add").modal('show');
				$("#saveAd").attr("disabled","disable");
				$("#modifyAd").removeAttr("disabled");
				$.modifyAd(row);
			});
			
		},
		'click #reset':function (e,value,row,index){
			//TODO
			resetUser(row.id);
			
		}
};