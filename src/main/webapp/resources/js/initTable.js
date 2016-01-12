/**
 * init bootstrapTable function
 * author : guoyidong
 * 
 * */

function initManagerTable(managerFormatter){
	//init bootstrap-table
	$("#managerTable").bootstrapTable({
	    //url: dirFetchUrl, // 接口 URL 地址
	    cache: false, // 不缓存
	    striped: true, // 隔行加亮
	    pagination: true, // 开启分页功能
	    pageSize: 7, // 设置默认分页为 50
	    pageList: [10, 25, 50, 100, 200], // 自定义分页列表
	    search: true, // 开启搜索功能
	    showRefresh: true, // 开启刷新功能
	    minimumCountColumns: 2, // 设置最少显示列个数
	    clickToSelect: false, // 单击行即可以选中
	    sortName: 'id', // 设置默认排序为 name
	    sortOrder: 'desc', // 设置排序为反序 desc
	    smartDisplay: true, // 智能显示 pagination 和 cardview 等
	    columns: [{ // 列设置
	        field: 'state',
	        checkbox: true // 使用复选框
	    }, {
	        field: 'name',
	        title: '用户名',
	        align: 'center',
	        valign: 'middle',
	    }, {
	        field: 'company_name',
	        title: '公司名称',
	        align: 'left',
	        valign: 'top',
	    }, {
	        field: 'contactor',
	        title: '联系人',
	        align: 'left',
	        valign: 'top',
	    }, {
	        field: 'contact',
	        title: '联系电话',
	        align: 'left',
	        valign: 'top',
	    }, {
	        field: 'register_time',
	        title: '注册时间',
	        align: 'left',
	        valign: 'top',
	        sortable: true // 开启排序功能
	    }, {
	        field: 'status_name',
	        title: '审核状态',
	        align: 'left',
	        valign: 'top'
	    }, {
	        field: 'operate',
	        title: '操作',
	        align: 'center',
	        valign: 'middle',
	        clickToSelect: false,
	        events: operateEvents,
	        formatter:managerFormatter
	    }],
	    onClickRow: function (row) {
	        //TODO
	      },
	});
	
	$("#welcome").remove();
}

function initAdinfoTable(OperateFormatter){
	$("#adinfoTable").bootstrapTable({
	    //url: 'getUsers?roleId=3&status=1', // 接口 URL 地址
	    cache: false, // 不缓存
	    striped: true, // 隔行加亮
	    pagination: true, // 开启分页功能
	    pageSize: 7, // 设置默认分页为 50
	    pageList: [10, 25, 50, 100, 200], // 自定义分页列表
	    search: true, // 开启搜索功能
	    showRefresh: true, // 开启刷新功能
	    minimumCountColumns: 2, // 设置最少显示列个数
	    clickToSelect: false, // 单击行即可以选中
	    sortName: 'id', // 设置默认排序为 name
	    sortOrder: 'desc', // 设置排序为反序 desc
	    smartDisplay: true, // 智能显示 pagination 和 cardview 等
	    columns: [{ // 列设置
	        field: 'state',
	        checkbox: true // 使用复选框
	    }, {
	        field: 'ad_id',
	        title: 'ID',
	        align: 'right',
	        valign: 'bottom',
	        sortable: true // 开启排序功能
	    }, {
	        field: 'ad_name',
	        title: '广告标题',
	        align: 'center',
	        valign: 'middle',
	    }, {
	        field: 'type_name',
	        title: '广告类型',
	        align: 'left',
	        valign: 'top',
	    },{
	        field: 'status_name',
	        title: '审核状态',
	        align: 'left',
	        valign: 'top'
	    },{
	        field: 'name',
	        title: '审核人',
	        align: 'left',
	        valign: 'top',
	        sortable: true // 开启排序功能
	    },{
	        field: 'operate',
	        title: '操作',
	        align: 'center',
	        valign: 'middle',
	        clickToSelect: false,
	        events: operateEvents,
	        formatter:OperateFormatter
	    }],
	    onClickRow: function (row) {
	        //TODO
	      },
	});
	
	$("#welcome").remove();
}