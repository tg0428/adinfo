/**
 * operator formatters
 * author  : GUOYIDONG
 * 
 * */
function managerUserOperateFormatter(value, row, index) {
	//TODO
	if (row.status == 1) {
		return [ '<div class="btn-group btn-group-sm" role="group" aria-label="...">'
				+ '<button type="button" class="btn btn-default" id="unPassUser">不通过</button>'
				+ '<button type="button" class="btn btn-default" id="passUser">通过</button>'
				+ '<button type="button" class="btn btn-danger" id="viewUser">查看详情</button>'
				+ '<button type="button" class="btn btn-danger" id="deleteUser">删除</button></div>' ]
				.join('');
	} else if (row.status == 2) {
		return [ '<div class="btn-group btn-group-sm" role="group" aria-label="...">'
				+ '<button type="button" class="btn btn-default" id="unPassUser">不通过</button>'
				+ '<button type="button" class="btn btn-default" id="viewUser">查看详情</button>'
				+ '<button type="button" class="btn btn-default" id="viewDestineList">借阅列表</button>'
				+ '<button type="button" class="btn btn-default" id="reset">重置密码</button>'
				+ '<button type="button" class="btn btn-danger" id="deleteUser">删除</button></div>' ]
				.join('');
	} else if (row.status == 3) {
		return [ '<div class="btn-group btn-group-sm" role="group" aria-label="...">'
				+ '<button type="button" class="btn btn-default" id="passUser">通过</button>'
				+ '<button type="button" class="btn btn-default" id="viewUser">查看详情</button>'
				+ '<button type="button" class="btn btn-default" id="reset">重置密码</button>'
				+ '<button type="button" class="btn btn-danger" id="deleteUser">删除</button></div>' ]
				.join('');
	}
}

function managerAssisterOperateFormatter(value, row, index) {
	//TODO
	return [ '<div class="btn-group btn-group-sm" role="group" aria-label="...">'
			+ '<button type="button" class="btn btn-default" id="viewUser">查看详情</button>'
			+ '<button type="button" class="btn btn-default" id="reset">重置密码</button>'
			+ '<button type="button" class="btn btn-danger" id="deleteUser">删除</button></div>' ]
			.join('');
}

function managerBookOperateFormatter(value, row, index) {
	//TODO
	return [ '<div class="btn-group btn-group-sm" role="group" aria-label="...">'
			+ '<button type="button" class="btn btn-default" id="viewBook">查看详情</button>'
			+ '<button type="button" class="btn btn-default" id="upload">上传图片</button>'
			+ '<button type="button" class="btn btn-default" id="destineUserList">借阅名单</button>'
			+ '<button type="button" class="btn btn-danger" id="deleteBook">删除</button></div>' ]
			.join('');
}

function managerDestineOperateFormatter(value, row, index) {
	//TODO
	return [ '<div class="btn-group btn-group-sm" role="group" aria-label="...">'
			+ '<button type="button" class="btn btn-default" id="viewBook">查看详情</button></div>' ]
			.join('');
}

function typeOperateFormatter(value, row, index) {
	return [ '<div class="btn-group btn-group-sm" role="group" aria-label="...">'
			+ '<button type="button" class="btn btn-default" id="viewType">查看详情</button>'
			+ '<button type="button" class="btn btn-danger" id="deleteType">删除</button></div>' ]
			.join('');

}

function statusforbook(value, row, index) {
	if (row.status == 1) {
		return '已归还';
	}
	if (row.status == 0) {
		return '未归还';
	}
}

function dateformatter(value, row, index) {
	return value + "天";
}
