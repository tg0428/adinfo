var userRoleId;

var setting = {
	view : {
		dblClickExpand : false,
		showLine : true,
		selectedMulti : false,
		expandSpeed : ($.browser.msie && parseInt($.browser.version) <= 6) ? ""
				: "fast"
	},
	data : {
		key : {
			name : "menu_dir"
		},
		simpleData : {
			enable : true,
			idKey : "menu_id",
			pIdKey : "parent_id",
			rootPId : "parent_id"
		},
	},
	callback : {
		onClick : function(event, treeId, treeNode) {
			show(treeNode.menu_dir);
		}
	}
};

var treeNodes;

$(function() {

	// show system time
	showTime();

	bootbox.setLocale("zh_CN");

	userRoleId = $("#roleId").val();

	$("#toolBarDiv").hide();

	$("#well").css('min-height', '467px');
	$("#well")
			.append(
					"<div id='welcome' style='text-align:center;display:block;text-decoration:none;font-size:20px;padding-top:80px'>"
							+ "<img src='/adinfo/resources/images/logo.jpg' width=100 style='margin-bottom:15px'/><p>欢迎使用山西大学图书借阅管理系统</p></div>");

	// init tip
	$("[data-toggle='tooltip']").tooltip();

	// get user's dir
	$.post("getDir", function(result) {
		treeNodes = result;
		$.fn.zTree.init($("#operate_field"), setting, treeNodes);
	}, "json");

	// logout method
	$("#logout").click(function() {
		bootbox.dialog({
			message : "您确定要注销吗？",
			title : "提示",
			buttons : {
				success : {
					label : "注销并退出",
					className : "btn-success",
					callback : function() {
						$.post("/adinfo/validateUser/logout", function(data) {
							if (data.valid == true || data.valid == "true") {
								location.href = '/adinfo/';
							}
						});
					}
				}
			}
		});
	});

	$.resetModal();
})