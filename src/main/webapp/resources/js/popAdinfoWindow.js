$(function() {
	$.saveAd();
})

$.saveAd = function(){
	$("#saveAd").click(function() {
		ad.check(function() {
			var option = $("#type").find("option:selected").index();
			var title = $("#adName").val();
			var detail = $("#detail").val();
			var userId = $("#userId").val();
			var data = {"type":option, "adName":title, "detail":detail, "userId":userId};
			$.post("addAd",data,function(result){
				if (result.valid == "true"){
					$('#add').modal('hide');
					showTips(result.msg);
					refresh("#adinfoTable");
				}
			});
		});
	});
}

$.modifyAd = function(obj){
	$("#modifyAd").click(function() {
		ad.check(function() {
			var option = $("#type").find("option:selected").index();
			var title = $("#adName").val();
			var detail = $("#detail").val();
			var data = {"type":option, "adName":title, "detail":detail, "adId" : obj.ad_id};
			$.post("modifyAd",data,function(result){
				if (result.valid == "true"){
					$('#add').modal('hide');
					showTips(result.msg);
					refresh("#adinfoTable");
				}
			});
		});
	});
}