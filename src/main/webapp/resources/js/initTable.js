/**
 * init bootstrapTable function author : guoyidong
 * 
 */

function initManagerTable(managerFormatter) {
	// init bootstrap-table
	$("#managerTable").bootstrapTable({
		cache : false, // 不缓存
		striped : true, // 隔行加亮
		pagination : true, // 开启分页功能
		pageSize : 7, // 设置默认分页为 50
		pageList : [ 10, 25, 50, 100, 200 ], // 自定义分页列表
		search : true, // 开启搜索功能
		showRefresh : true, // 开启刷新功能
		minimumCountColumns : 2, // 设置最少显示列个数
		clickToSelect : false, // 单击行即可以选中
		sortName : 'id', // 设置默认排序为 name
		sortOrder : 'desc', // 设置排序为反序 desc
		smartDisplay : true, // 智能显示 pagination 和 cardview 等
		columns : [ { // 列设置
			field : 'state',
			checkbox : true
		// 使用复选框
		}, {
			field : 'name',
			title : '用户名',
			align : 'center',
			valign : 'middle',
		}, {
			field : 'company_name',
			title : '学院名称',
			align : 'left',
			valign : 'middle',
		}, {
			field : 'register_time',
			title : '注册时间',
			align : 'left',
			valign : 'middle',
			sortable : true
		// 开启排序功能
		}, {
			field : 'status_name',
			title : '审核状态',
			align : 'left',
			valign : 'middle'
		}, {
			field : 'operate',
			title : '操作',
			align : 'center',
			valign : 'middle',
			clickToSelect : false,
			events : operateEvents,
			formatter : managerFormatter
		} ],
		onClickRow : function(row) {
			// TODO
		},
	});

	$("#welcome").remove();
}

function initBookTable(OperateFormatter) {
	$("#bookTable").bootstrapTable({
		// url: 'getUsers?roleId=3&status=1', // 接口 URL 地址
		cache : false, // 不缓存
		striped : true, // 隔行加亮
		pagination : true, // 开启分页功能
		pageSize : 7, // 设置默认分页为 50
		pageList : [ 7, 14, 20, 40 ], // 自定义分页列表
		search : true, // 开启搜索功能
		showRefresh : true, // 开启刷新功能
		minimumCountColumns : 2, // 设置最少显示列个数
		clickToSelect : false, // 单击行即可以选中
		sortName : 'id', // 设置默认排序为 name
		sortOrder : 'desc', // 设置排序为反序 desc
		smartDisplay : true, // 智能显示 pagination 和 cardview 等
		columns : [ { // 列设置
			field : 'state',
			checkbox : true
		}, {
			field : 'b_id',
			title : 'ID',
			align : 'center',
			valign : 'middle',
			sortable : true
		}, {
			field : 'b_name',
			title : '图书名称',
			align : 'center',
			valign : 'middle'
		}, {
			field : 'type_name',
			title : '图书类型',
			align : 'center',
			valign : 'middle'
		}, {
			field : 'b_total_amount',
			title : '图书总量',
			align : 'center',
			valign : 'middle'
		}, {
			field : 'b_exist_amount',
			title : '图书剩余',
			align : 'center',
			valign : 'middle',
			sortable : true
		}, {
			field : 'b_borrow_duration',
			title : '借书规定时长',
			align : 'center',
			valign : 'middle',
			sortable : true
		}, {
			field : 'operate',
			title : '操作',
			align : 'center',
			valign : 'middle',
			clickToSelect : false,
			events : operateEvents,
			formatter : OperateFormatter
		} ],
		onClickRow : function(row) {
			// TODO
		},
	});

	$("#welcome").remove();
}

function initTypeTable(OperateFormatter) {
	$("#typeTable").bootstrapTable({
		cache : false, // 不缓存
		striped : true, // 隔行加亮
		pagination : true, // 开启分页功能
		pageSize : 7, // 设置默认分页为 50
		pageList : [ 7, 10, 15, 25, 50 ], // 自定义分页列表
		search : true, // 开启搜索功能
		showRefresh : true, // 开启刷新功能
		minimumCountColumns : 2, // 设置最少显示列个数
		clickToSelect : false, // 单击行即可以选中
		sortName : 'id', // 设置默认排序为 name
		sortOrder : 'desc', // 设置排序为反序 desc
		smartDisplay : true, // 智能显示 pagination 和 cardview 等
		columns : [ { // 列设置
			field : 'state',
			checkbox : true
		}, {
			field : 'type_id',
			title : 'ID',
			align : 'center',
			valign : 'middle',
			sortable : true
		}, {
			field : 'type_name',
			title : '图书类型',
			align : 'center',
			valign : 'middle',
		}, {
			field : 'num',
			title : '包含图书(本)',
			align : 'center',
			valign : 'middle',
		}, {
			field : 'operate',
			title : '操作',
			align : 'center',
			valign : 'middle',
			clickToSelect : false,
			events : operateEvents,
			formatter : OperateFormatter
		} ],
		onClickRow : function(row) {
			// TODO
		},
	});

	$("#welcome").remove();
}

function initDestineTable(OperateFormatter) {
	$("#destineTable").bootstrapTable({
		cache : false, // 不缓存
		striped : false, // 隔行加亮
		pagination : true, // 开启分页功能
		pageSize : 7, // 设置默认分页为 50
		pageList : [ 7, 10, 15, 25, 50 ], // 自定义分页列表
		search : true, // 开启搜索功能
		showRefresh : true, // 开启刷新功能
		minimumCountColumns : 2, // 设置最少显示列个数
		clickToSelect : false, // 单击行即可以选中
		sortName : 'id', // 设置默认排序为 name
		sortOrder : 'desc', // 设置排序为反序 desc
		smartDisplay : true, // 智能显示 pagination 和 cardview 等
		rowStyle : function(row, index) {
			var str = row.warning_return_time;
			var sd = str.split("-");
			var date = new Date(Date.parse(str)).Format("yyyy-MM-dd");
			var now = new Date().Format("yyyy-MM-dd");
			console.info(date + " : " + now)
			if (date < now) {
				return {
					classes : 'danger'
				};
			}
			return {}
		},
		columns : [ { // 列设置
			field : 'state',
			checkbox : true
		}, {
			field : 'b_id',
			title : 'ID',
			align : 'center',
			valign : 'middle',
			sortable : true
		}, {
			field : 'b_name',
			title : '图书名称',
			align : 'center',
			valign : 'middle'
		}, {
			field : 'type_name',
			title : '图书类型',
			align : 'center',
			valign : 'middle'
		}, {
			field : 'b_total_amount',
			title : '图书总量',
			align : 'center',
			valign : 'middle'
		}, {
			field : 'b_exist_amount',
			title : '图书剩余',
			align : 'center',
			valign : 'middle',
			sortable : true
		}, {
			field : 'status',
			title : '是否归还',
			align : 'center',
			valign : 'middle',
			formatter : statusforbook
		}, {
			field : 'b_borrow_duration',
			title : '借书规定时长',
			align : 'center',
			valign : 'middle',
			formatter : dateformatter
		}, {
			field : 'warning_return_time',
			title : '截至还书日期',
			align : 'center',
			valign : 'middle'
		}, {
			field : 'operate',
			title : '操作',
			align : 'center',
			valign : 'middle',
			clickToSelect : false,
			events : operateEvents,
			formatter : OperateFormatter
		} ],
		onClickRow : function(row) {
		},
	});

	$("#welcome").remove();
}