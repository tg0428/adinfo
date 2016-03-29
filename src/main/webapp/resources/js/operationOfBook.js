/**
 * 封装检查广告信息填写校验的回调函数 使用方法 ： ad.check(function(){ //TODO });
 * 
 */
var book = {
	check : function(callback) {

		var data = $("#ffAdd").serializeArray();
		var flags = [];
		var res = true;

		var inputs_flag = $.each(data, function(index, value) {
			flags.push($.checkName(value))
		});

		$.each(flags, function(index, value) {
			if (value == false) {
				res = false;
			}
			return value;
		})
		if (res && callback && callback instanceof Function) {
			callback();
		}
	}
}

$.checkName = function(value) {
	if (value.name == "b_detail") {
		$.checkDetail(value);
	} else if (value.name == "b_type") {
		$.checkSelect();
	} else {
		if (value.value.trim().length > 20) {
			$("#" + value.name + "_tip").text("超出长度限制1-20");
			$("#" + value.name + "_tip").fadeIn(500).delay(1000).fadeOut(400);
			return false;
		}
		if (value.value.trim().length == 0) {
			$("#" + value.name + "_tip").text("不能为空");
			$("#" + value.name + "_tip").fadeIn(500).delay(1000).fadeOut(400);
			return false;
		}
	}
	return true;
}

$.checkDetail = function(value) {
	if (value.value.trim().length > 255) {
		$("#" + value.name + "_tip").text("超出长度限制1-255");
		$("#" + value.name + "_tip").fadeIn(500).delay(1000).fadeOut(400);
		return false;
	}
	if (value.value.trim().length == 0) {
		$("#" + value.name + "_tip").text("不能为空");
		$("#" + value.name + "_tip").fadeIn(500).delay(1000).fadeOut(400);
		return false;
	}
}

$.checkSelect = function() {
	if ($("#b_type option:selected").text() == '请选择图书类型') {
		$("#b_type_tip").text("请选择图书类型");
		$("#b_type_tip").fadeIn(500).delay(1000).fadeOut(400);
		return false;
	}
}