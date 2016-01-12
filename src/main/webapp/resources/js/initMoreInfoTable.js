/**
 * 封装异步加载moreInfo 表格的JQUERY方法
 * author ： GUOYIDONG
 * 使用方法：
 * 		moreInfo.init(Object, data, title, table, function(){
 * 			//Object : 拟态框DOM对象
 * 			//data	 : JSON对象
 * 			//title  : 拟态框标题
 * 			//table  : table DOM对象
 * 			//function : callback 回调函数
 * 		}); 
 */

var moreInfo = {

	init : function(Object, data, title, table,JsonForCell, callback) {

		$.resolver(data, Object, title, table, JsonForCell);
		$(Object).on('hidden.bs.modal', function () {
			if (callback && callback instanceof Function) {
				callback();
			}
		})
	}
}

$.resolver = function(data, Object, title, table, JsonForCell){
	$(Object).modal('show');
	$("#infoTitile").html(title);
	$.each(data, function (key, value){
		$.each(JsonForCell, function(ckey, cvalue){
			if (ckey == key) {
				if (value == null || value == ""){
					value = "暂无";
				}
				$(table).append(
						"<tr>" +
							"<td width=130><i class='icon-ok-circle'></i>&nbsp;<span>"+cvalue+"</span></td>" +
							"<td colspan=2>"+value+"</td>"+
						"</tr>"
						);
			}
		})
	});
}