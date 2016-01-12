/**
 * utils	
 * author : GUOYIDONG
 * */

function showTime(){
	var curTime = new Date();
	$("#time").html(curTime.toLocaleString());
	setTimeout("showTime()", 1000);
}

//显示错误或提示信息（需要引用jNotify相关文件）
function showError(tips, TimeShown, autoHide) {
    jError(
      tips,
      {
          autoHide: autoHide || true, // added in v2.0
          TimeShown: TimeShown || 1500,
          HorizontalPosition: 'right',
          VerticalPosition: 'bottom',
          ShowOverlay: false,
          ColorOverlay: '#000',
          onCompleted: function () { // added in v2.0
              //alert('jNofity is completed !');
          }
      }
    );
}

//显示提示信息
function showTips(tips, TimeShown, autoHide) {
    jSuccess(
      tips,
      {
          autoHide: autoHide || true, // added in v2.0
          MinWidth:10,
          TimeShown: TimeShown || 1500,
          HorizontalPosition: 'center',
          VerticalPosition: 'top',
          ShowOverlay: false,
          LongTrip : 50,  
          ColorOverlay: '#000',
          onCompleted: function () { // added in v2.0
              //alert('jNofity is completed !');
          }
      }
    );
}

$.loadSelect = function(domStr){
	$(domStr).click(function(){
		$.get("getType",function(result){
			$.each(result,function(i,item){
				$("#type").append("<option>"+item.type_name+"</option>");
			})
		});
	});
}

$.resetModal = function(){
	$("#add").on('hidden.bs.modal',function(){
		$("#type").find("option").each(function(index){
			if (index != 0){
				$(this).remove();
			}
		});
		$("#adName").val("");
		$("#detail").val("");
		$("#modifyAd").attr("disabled","disabled");
		$("#saveAd").removeAttr("disabled");
		$("#lblAddTitle").html("添加广告信息");
	});
}