/**
 * operator formatters
 * author  : GUOYIDONG
 * 
 * */
function managerUserOperateFormatter(value,row,index){
	//TODO
	if (row.status == 1 ){
		return [
		        '<button type="button" id="passUser" class="button button-primary button-pill button-tiny" title="通过"><i class="icon-ok"></i></button>&nbsp;',
		        '<button type="button" id="unPassUser" class="button button-caution button-pill button-tiny" title="不通过"><i class="icon-remove"></i></button>&nbsp;',
		        '<button type="button" id="viewUser" class="button button-highlight button-pill button-tiny" title="查看详情"><i class="icon-eye-open"></i></button>&nbsp;',
		        '<button type="button" id="deleteUser" class="button button-royal button-pill button-tiny" title="删除"><i class="icon-trash"></i></button>&nbsp;'
		       ].join('');
	} else if (row.status == 2){
		return [
		        '<button type="button" id="unPassUser" class="button button-caution button-pill button-tiny" title="不通过"><i class="icon-remove"></i></button>&nbsp;',
		        '<button type="button" id="viewUser" class="button button-highlight button-pill button-tiny" title="查看详情"><i class="icon-eye-open"></i></button>&nbsp;',
		        '<button type="button" id="deleteUser" class="button button-royal button-pill button-tiny" title="删除"><i class="icon-trash"></i></button>&nbsp;',
		        '<button type="button" id="reset" class="button button-primary button-circle button-tiny" title="重置密码"><i class="icon-wrench"></i></button>&nbsp;'
		       ].join('');
	} else if (row.status == 3){
		return [
		        '<button type="button" id="passUser" class="button button-primary button-pill button-tiny" title="通过"><i class="icon-ok"></i></button>&nbsp;',
		        '<button type="button" id="viewUser" class="button button-highlight button-pill button-tiny" title="查看详情"><i class="icon-eye-open"></i></button>&nbsp;',
		        '<button type="button" id="deleteUser" class="button button-royal button-pill button-tiny" title="删除"><i class="icon-trash"></i></button>&nbsp;',
		        '<button type="button" id="reset" class="button button-primary button-circle button-tiny" title="重置密码"><i class="icon-wrench"></i></button>&nbsp;'
		       ].join('');
	}
}

function managerAssisterOperateFormatter(value,row,index){
	//TODO
	return [
		      '<button type="button" id="viewUser" class="button button-highlight button-pill button-tiny" title="查看详情"><i class="icon-eye-open"></i></button>&nbsp;',
		      '<button type="button" id="deleteUser" class="button button-royal button-pill button-tiny" title="删除"><i class="icon-trash"></i></button>&nbsp;',
		      '<button type="button" id="reset" class="button button-primary button-circle button-tiny" title="重置密码"><i class="icon-wrench"></i></button>&nbsp;'
		   ].join('');
}

function managerAdOperateFormatter(value,row,index){
	//TODO
	if (row.status == 1 ){
		return [
		        '<button type="button" id="passAd" class="button button-primary button-pill button-tiny" title="通过"><i class="icon-ok"></i></button>&nbsp;',
		        '<button type="button" id="unPassAd" class="button button-caution button-pill button-tiny" title="不通过"><i class="icon-remove"></i></button>&nbsp;',
		        '<button type="button" id="viewAllAd" class="button button-highlight button-pill button-tiny" title="查看详情"><i class="icon-eye-open"></i></button>&nbsp;',
		        '<button type="button" id="deleteAd" class="button button-royal button-pill button-tiny" title="删除"><i class="icon-trash"></i></button>&nbsp;'
		       ].join('');
	} else if (row.status == 2){
		return [
		        '<button type="button" id="unPassAd" class="button button-caution button-pill button-tiny" title="不通过"><i class="icon-remove"></i></button>&nbsp;',
		        '<button type="button" id="viewAllAd" class="button button-highlight button-pill button-tiny" title="查看详情"><i class="icon-eye-open"></i></button>&nbsp;',
		        '<button type="button" id="deleteAd" class="button button-royal button-pill button-tiny" title="删除"><i class="icon-trash"></i></button>&nbsp;'
		       ].join('');
	} else if (row.status == 3){
		return [
		        '<button type="button" id="passAd" class="button button-primary button-pill button-tiny" title="通过"><i class="icon-ok"></i></button>&nbsp;',
		        '<button type="button" id="viewAllAd" class="button button-highlight button-pill button-tiny" title="查看详情"><i class="icon-eye-open"></i></button>&nbsp;',
		        '<button type="button" id="deleteAd" class="button button-royal button-pill button-tiny" title="删除"><i class="icon-trash"></i></button>&nbsp;'
		       ].join('');
	}
	
}


function adinfoOperateFormatter(value,row,index){
	//TODO
	if (row.status == 0){
		return [
		        '<button type="button" id="submit" class="button button-primary button-pill button-tiny" title="提交审核"><i class="icon-circle-arrow-up"></i></button>&nbsp;',
		        '<button type="button" id="modify" class="button button-caution button-pill button-tiny" title="修改"><i class="icon-edit"></i></button>&nbsp;',
		        '<button type="button" id="view" class="button button-highlight button-pill button-tiny" title="查看详情"><i class="icon-eye-open"></i></button>&nbsp;',
		        '<button type="button" id="deleteAd" class="button button-royal button-pill button-tiny" title="删除"><i class="icon-trash"></i></button>&nbsp;'
		       ].join('');
	} else if (row.status == 1 || row.status == 2){
		return [
		        '<button type="button" id="view" class="button button-highlight button-pill button-tiny" title="查看详情"><i class="icon-eye-open"></i></button>&nbsp;'
		       ].join('');
	} else if (row.status == 3){
		return [
		        '<button type="button" id="submit" class="button button-primary button-pill button-tiny" title="提交审核"><i class="icon-circle-arrow-up"></i></button>&nbsp;',
		        '<button type="button" id="modify" class="button button-caution button-pill button-tiny" title="修改"><i class="icon-edit"></i></button>&nbsp;',
		        '<button type="button" id="view" class="button button-highlight button-pill button-tiny" title="查看详情"><i class="icon-eye-open"></i></button>&nbsp;'
		       ].join('');
	}
	
}

