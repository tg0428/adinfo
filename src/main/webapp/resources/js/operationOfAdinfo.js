/**
 * 封装检查广告信息填写校验的回调函数
 * 使用方法 ： 
 * 			ad.check(function(){
 * 					//TODO
 * 				});
 * 
 * */
var ad = {
	check : function(callback) {
		var dc = $.checkDetail();
		var ac = $.checkAdName();
		var sc = $.checkSelect();
		
		if ( dc && ac && sc && callback && callback instanceof Function) {
			callback();
		}
	},
	
	modify : function(JsonObj, type, title, detail, callback){
		
		$("#lblAddTitle").html("修改广告信息");
		$.get("getType",function(result){
			$.each(result,function(i,item){
				$("#type").append("<option>"+item.type_name+"</option>");
			})
		});
		$(type).children("option[value="+JsonObj.type_name+"]").attr("selected","selected");
		$(detail).val(JsonObj.detail);
		$(title).val(JsonObj.ad_name);
		if (callback && callback instanceof Function){
			callback();
		}
	}
}

$.checkAdName = function(){
	if ($("#adName").val().length > 20){
		$("#titleMsg").text("超出长度限制1-20");
		return false;
	}
	if ($("#adName").val().length == 0){
		$("#titleMsg").text("不能为空");
		return false;
	}
	return true;
}

$.checkDetail = function(){
	if ($("#detail").val().length > 255){
		$("#detailMsg").text("超出长度限制1-255");
		return false;
	}
	if ($("#detail").val().length == 0){
		$("#detailMsg").text("不能为空");
		return false;
	}
	return true;
}

$.checkSelect = function(){
	if ($("#type").find("option:selected").val().indexOf("请选择") > 0){
		$("#selectMsg").text("请选择广告类型");
		return false;
	}
	return true;
}