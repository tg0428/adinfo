/**
 * tableFunction : some functions about operating tables author : GUOYIDONG
 * 
 */
function show(str) {
	var dir = str;
	if (dir == '个人信息设置') {
		bootbox
				.dialog({
					title : "修改密码",
					message : "<div class='well ' style='margin-top:25px;'><span id='tips' style='color:red;margin:160px'></span>"
							+ "<form class='form-horizontal' role='form'>"
							+ "<div class='form-group'><label class='col-sm-3 control-label no-padding-right' for='txtOldPwd'>旧密码</label>"
							+ "<div class='col-sm-9'><input type='text' id='txtOldPwd' placeholder='请输入旧密码' class='col-xs-10 col-sm-5' style='margin-bottom:10px'/></div></div>"
							+ "<div class='space-4'></div><div class='form-group'><label class='col-sm-3 control-label no-padding-right' for='txtNewPwd1'>新密码</label>"
							+ "<div class='col-sm-9'><input type='text' id='txtNewPwd1' placeholder='请输入新密码' class='col-xs-10 col-sm-5' style='margin-bottom:10px'/></div></div>"
							+ "<div class='space-4'></div><div class='form-group'><label class='col-sm-3 control-label no-padding-right' for='txtNewPwd2'>确认新密码</label>"
							+ "<div class='col-sm-9'><input type='text' id='txtNewPwd2' placeholder='再次输入新密码' class='col-xs-10 col-sm-5' style='margin-bottom:10px'/></div></div></form></div>",
					buttons : {
						"success" : {
							"label" : "<i class='icon-ok'></i> 保存",
							"className" : "btn-sm btn-success",
							"callback" : function() {
								var txt1 = $("#txtOldPwd").val();
								var txt2 = $("#txtNewPwd1").val();
								var txt3 = $("#txtNewPwd2").val();

								if (txt1 == "" || txt2 == "" || txt3 == "") {
									$("#tips").html("密码不能为空");
									return false;
								}
								if (txt2 != txt3) {
									$("#tips").html("两次输入新密码不一致，请重新输入!");
									return false;
								}
								var info = {
									"oldPass" : txt1,
									"newPass" : txt2,
									"repeatPass" : txt3
								};
								$.post("/adinfo/validateUser/modify", info,
										function(data) {
											bootbox.alert(data.msg);
										}, 'json');
							}
						},
						"cancel" : {
							"label" : "<i class='icon-remove'></i> 取消",
							"className" : "btn-sm btn-danger",
							"callback" : function() {
							}
						}
					}
				});
	}
	if (dir == '查看图书列表') {
		if (userRoleId == 1 || userRoleId == 3) {
			destroyTable();
			initBookTable(managerBookOperateFormatter);
			refresh("#bookTable", 'getAllBook');
		} else {
			$("#booklist").modal();

			$.get('/adinfo/manager/getBooksForUser', function(view) {
				$("#booklist #content").html(view);
			})
		}
	}
	if (dir == '未通过审核读者列表') {
		destroyTable();
		initManagerTable(managerUserOperateFormatter);
		refresh("#managerTable", 'getUsers?roleId=2&status=3');
	}
	if (dir == '已通过审核读者列表') {
		destroyTable();
		initManagerTable(managerUserOperateFormatter);
		refresh("#managerTable", 'getUsers?roleId=2&status=2');
	}
	if (dir == '未审核读者信息') {
		destroyTable();
		$("#toolBarDiv").hide();
		initManagerTable(managerUserOperateFormatter);
		refresh("#managerTable", 'getUsers?roleId=2&status=1');
	}
	if (dir == '查看管理员名单') {
		destroyTable();
		initManagerTable(managerAssisterOperateFormatter);
		refresh("#managerTable", '/adinfo/validateUser/getAssister');
	}

	if (dir == '图书详细信息添加') {
		$("#add").modal();
		$.loadSelect();
	}

	if (dir == '查看图书类型') {
		destroyTable();
		initTypeTable(typeOperateFormatter);
		refresh("#typeTable", 'getType');
	}

	if (dir == '已借阅图书列表') {
		var u_id = $("#userId").val();
		destroyTable();
		initDestineTable(managerDestineOperateFormatter);
		refresh("#destineTable", 'getDestineBook?u_id=' + u_id);
	}

	if (dir == '图书类别添加') {
		bootbox
				.dialog({
					title : "<i class='icon-plus'></i>&nbsp;添加图书类型",
					message : "<div class='well ' style='margin-top:25px;'><span id='tips' style='color:red;margin:160px'></span>"
							+ "<form class='form-horizontal' role='form'>"
							+ "<div class='form-group'>"
							+ "<label class='col-sm-3 control-label no-padding-right' for='password'>图书类型&nbsp;</label>"
							+ "<div class='col-sm-9'><input type='text' id='b_type_name' placeholder='输入图书类型' class='col-xs-10 col-sm-5' /></div></div>"
							+ "<div class='space-4'></div>",
					buttons : {
						"success" : {
							"label" : "<i class='icon-ok'></i> 保存",
							"className" : "btn-sm btn-success",
							"callback" : function() {
								var b_type = $("#b_type_name").val();

								if (b_type == "") {
									$("#tips").html("信息填写不完整");
									return false;
								}
								var info = {
									"type_name" : b_type.trim()
								};
								$
										.post(
												"/adinfo/manager/addType",
												info,
												function(data) {
													destroyTable();
													initTypeTable(typeOperateFormatter);
													refresh("#typeTable",
															'getType');
													showTips(data.msg);
												}, 'json');
							}
						},
						"cancel" : {
							"label" : "<i class='icon-info'></i> 取消",
							"className" : "btn-sm btn-danger",
							"callback" : function() {
							}
						}
					}
				});
	}

	if (dir == '添加管理员') {
		bootbox
				.dialog({
					title : "<i class='icon-plus'></i>&nbsp;添加管理员",
					message : "<div class='well ' style='margin-top:25px;'><span id='tips' style='color:red;margin:160px'></span>"
							+ "<form class='form-horizontal' role='form'>"
							+ "<div class='form-group'>"
							+ "<label class='col-sm-3 control-label no-padding-right' for='name'>管理员用户名</label>"
							+ "<div class='col-sm-9'><input type='text' id='name' placeholder='输入管理员名称' class='col-xs-10 col-sm-5' style='margin-bottom:6px'/></div></div>"
							+ "<div class='space-4'></div><div class='form-group'><label class='col-sm-3 control-label no-padding-right' for='password'>管理员密码</label>"
							+ "<div class='col-sm-9'><input type='text' id='password' placeholder='请输入密码' class='col-xs-10 col-sm-5' /></div></div>"
							+ "<div class='space-4'></div>",
					buttons : {
						"success" : {
							"label" : "<i class='icon-ok'></i> 保存",
							"className" : "btn-sm btn-success",
							"callback" : function() {
								var txt1 = $("#name").val();
								var txt2 = $("#password").val();

								if (txt1 == "" || txt2 == "") {
									$("#tips").html("信息填写不完整");
									return false;
								}
								var info = {
									"username" : txt1,
									"password" : txt2
								};
								$
										.post(
												"/adinfo/validateUser/addAssister",
												info,
												function(data) {
													$("#tips").html(data.msg);
													destroyTable();
													initManagerTable(managerAssisterOperateFormatter);
													refresh("#managerTable",
															'/adinfo/validateUser/getAssister');
												}, 'json');
							}
						},
						"cancel" : {
							"label" : "<i class='icon-info'></i> 取消",
							"className" : "btn-sm btn-danger",
							"callback" : function() {
							}
						}
					}
				});
	}
}

// destroy table
function destroyTable() {
	$("#managerTable").bootstrapTable('destroy');
	$("#bookTable").bootstrapTable('destroy');
	$("#typeTable").bootstrapTable('destroy');
	$("#destineTable").bootstrapTable('destroy');
}

// refresh table
function refresh(object, dataUrl) {
	$(object).bootstrapTable('refresh', {
		url : dataUrl
	});
}

// pass user : 通过用户信息审核
function passUser(id) {
	$.get("passUser?id=" + id, function(result) {
		if (result.valid == "true") {
			showTips(result.msg);
			refresh("#managerTable");
		}
	}, "json")
}

// unpass user : 未通过用户信息审核
function unPassUser(id) {
	$.get("unPassUser?id=" + id, function(result) {
		if (result.valid == "true") {
			showTips(result.msg);
			refresh("#managerTable");
		}
	}, "json")
}

function deleteUser(id) {
	sweetAlert({
		title : "您确定要删除该用户吗？",
		type : "warning",
		showCancelButton : true,
		confirmButtonColor : "#DD6B55",
		confirmButtonText : "删除",
		cancelButtonText : "取消",
		closeOnConfirm : false
	}, function() {
		$.get("delUser?id=" + id, function(result) {
			if (result.valid == 'true') {
				refresh("#managerTable");
				swal({
					title : result.msg,
					type : "success",
					confirmButtonText : "确定"
				});
			}
		}, "json");
	});
}

// delete type
function deleteType(id) {
	sweetAlert({
		title : "您确定要删除吗？",
		text : "该操作不可还原！",
		type : "warning",
		showCancelButton : true,
		confirmButtonColor : "#DD6B55",
		confirmButtonText : "删除",
		cancelButtonText : "取消",
		closeOnConfirm : false
	}, function() {
		$.get("delType?type_id=" + id, function(result) {
			if (result.valid == 'true') {
				refresh("#typeTable");
				swal({
					title : result.msg,
					type : "success",
					confirmButtonText : "确定"
				});
			}
		}, "json");
	});
}

function deleteBook(id) {
	sweetAlert({
		title : "您确定要删除该图书吗？",
		type : "warning",
		showCancelButton : true,
		confirmButtonColor : "#DD6B55",
		confirmButtonText : "删除",
		cancelButtonText : "取消",
		closeOnConfirm : false
	}, function() {
		$.get("delBook?id=" + id, function(result) {
			if (result.valid == 'true') {
				refresh("#bookTable");
				swal({
					title : result.msg,
					type : "success",
					confirmButtonText : "确定"
				});
			}
		}, "json");
	});
}

function resetUser(id) {
	var data = {
		"id" : id
	};
	$.post("/adinfo/validateUser/resetUser", data, function(result) {
		showTips(result.msg);
	})
}

function back(b_id, u_id, status) {
	var data = {
		"id" : b_id,
		"u_id" : u_id
	};
	if (status == 0) {
		sweetAlert({
			title : "您确定要归还该图书吗？",
			type : "warning",
			showCancelButton : true,
			confirmButtonColor : "#DD6B55",
			confirmButtonText : "归还",
			cancelButtonText : "取消",
			closeOnConfirm : false
		}, function() {
			$.post("/adinfo/manager/back", data, function(data) {
				if (data.valid == 'true') {
					$("#userlist").modal('hide');
					swal({
						title : data.msg,
						type : "success",
						confirmButtonText : "确定"
					});
				}

			})
		});
	} else {
		alert("图书已经归还书库，无需再进行归还操作");
	}
}

function destineUserList(o) {
	var id = o.b_id;
	$.get("/adinfo/manager/getUserlist?id=" + id, function(data) {
		$.each(data, function(index, key) {
			$("#user_tip").hide();
			$("#userlist #content").append(
					"<a class='list-group-item'>" + "<span class='badge'>借阅数量："
							+ key.num + "</span>" + key.name + "</a>")
		})
	})
	$("#userlist").modal();
}

function destineBookList(o) {
	var id = o.id;
	$.get("/adinfo/manager/getOneUser?id=" + id, function(data) {
		$.each(data, function(index, key) {
			if (key.b_id == null) {
				return false;
			}
			$("#user_tip").hide();
			$("#userlist #content").append(
					"<a href='javascript:back("
							+ key.b_id
							+ ","
							+ key.id
							+ ","
							+ key.status
							+ ")' class='list-group-item'>"
							+ "<span class='badge'>借阅时间："
							+ key.borrow_time
							+ "</span>"
							+ "<span class='badge'>还书时间："
							+ (key.actual_return_time == null ? '--'
									: key.actual_return_time) + "</span>"
							+ "<span class='badge'>"
							+ (key.status == 0 ? "未归还" : "已归还") + "</span>"
							+ key.b_name + "（点击进行还书操作）</a>")
		})
	})
	$("#userlist").modal();
}

window.operateEvents = {
	'click #deleteType' : function(e, value, row, index) {
		alert(row.type_id)
		deleteType(row.type_id);
	},
	'click #deleteUser' : function(e, value, row, index) {
		deleteUser(row.id);
	},
	'click #deleteBook' : function(e, value, row, index) {
		deleteBook(row.b_id);
	},
	'click #passUser' : function(e, value, row, index) {
		passUser(row.id);
	},
	'click #unPassUser' : function(e, value, row, index) {
		unPassUser(row.id);
	},
	'click #viewBook' : function(e, value, row, index) {
		var str = '{"b_name" : "图书名称", "type_name" : "类型", "b_detail" : "图书详情", "b_total_amount" : "图书总量(本)", "b_exist_amount" : "图书余量", "b_borrow_duration" : "可借周期(天)", "b_cover_server_url": "图书封面"}';
		var jsonObj = JSON.parse(str);
		moreInfo.init("#moreInfo", row, "查看图书详情", "#infoTable", jsonObj,
				function() {
					$("#infoTable").find("tr").remove();
				});
	},
	'click #viewType' : function(e, value, row, index) {
		var str = '{"type_name" : "类型", "num" : "包含书籍（本）"}';
		var jsonObj = JSON.parse(str);
		moreInfo.init("#moreInfo", row, "查看图书类型详情", "#infoTable", jsonObj,
				function() {
					$("#infoTable").find("tr").remove();
				});
	},
	'click #viewUser' : function(e, value, row, index) {
		var str = '{"name" : "用户名", "contactor" : "联系人", "contact" : "联系方式", "company_name" : "学院名称", "register_time" : "注册时间", "status_name" : "审核状态"}';
		var jsonObj = JSON.parse(str);
		moreInfo.init("#moreInfo", row, "查看用户详情", "#infoTable", jsonObj,
				function() {
					$("#infoTable").find("tr").remove();
				});
	},
	'click #reset' : function(e, value, row, index) {
		resetUser(row.id);

	},
	'click #upload' : function(e, value, row, index) {
		$("#upload_pic").modal();
		$("input[name=id]").val(row.b_id);
	},
	'click #back' : function(e, value, row, index) {
		back(row);
	},
	'click #destineUserList' : function(e, value, row, index) {
		destineUserList(row);
	},
	'click #viewDestineList' : function(e, value, row, index) {
		destineBookList(row);
	}

};