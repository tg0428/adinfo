/**
 * utils author : GUOYIDONG
 */

function showTime() {
	var curTime = new Date();
	$("#time").html(curTime.toLocaleString());
	setTimeout("showTime()", 1000);
}

// 显示错误或提示信息（需要引用jNotify相关文件）
function showError(tips, TimeShown, autoHide) {
	jError(tips, {
		autoHide : autoHide || true, // added in v2.0
		TimeShown : TimeShown || 1500,
		HorizontalPosition : 'right',
		VerticalPosition : 'bottom',
		ShowOverlay : false,
		ColorOverlay : '#000',
		onCompleted : function() { // added in v2.0
			// alert('jNofity is completed !');
		}
	});
}

// 显示提示信息
function showTips(tips, TimeShown, autoHide) {
	jSuccess(tips, {
		autoHide : autoHide || true, // added in v2.0
		MinWidth : 10,
		TimeShown : TimeShown || 1500,
		HorizontalPosition : 'center',
		VerticalPosition : 'top',
		ShowOverlay : false,
		LongTrip : 50,
		ColorOverlay : '#000',
		onCompleted : function() { // added in v2.0
			// alert('jNofity is completed !');
		}
	});
}

$.loadSelect = function() {
	$.get("getType", function(result) {
		$.each(result, function(i, item) {
			$("#b_type").append(
					"<option value=" + item.type_id + ">" + item.type_name
							+ "</option>");
		})
	});
}

$.resetModal = function() {
	$("#add").on('hidden.bs.modal', function() {
		$("#type").find("option").each(function(index) {
			if (index != 0) {
				$(this).remove();
			}
		});
		var data = $("#ffAdd").serializeArray();

		$.each(data, function(index, value) {
			$("#" + value.name).val("");
		});
	});
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function(fmt) { // author: meizz
	var o = {
		"M+" : this.getMonth() + 1, // 月份
		"d+" : this.getDate(), // 日
		"h+" : this.getHours(), // 小时
		"m+" : this.getMinutes(), // 分
		"s+" : this.getSeconds(), // 秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
		"S" : this.getMilliseconds()
	// 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
					: (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}