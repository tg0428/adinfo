$(function() {
	$.saveBook();
})

$.saveBook = function() {
	$("#saveBook").click(function() {
		book.check(function() {
			var b_type = $("#b_type").find("option:selected").val();
			var b_name = $("#b_name").val();
			var b_total_amount = $("#b_total_amount").val();
			var b_borrow_duration = $("#b_borrow_duration").val();
			var b_detail = $("#b_detail").val();
			var data = {
				"b_type" : b_type,
				"b_name" : b_name,
				"b_total_amount" : b_total_amount,
				"b_borrow_duration" : b_borrow_duration,
				'b_detail' : b_detail
			};
			$.post("addBook", data, function(result) {
				if (result.valid == "true") {
					$('#add').modal('hide');
					showTips(result.msg);
					refresh("#bookTable");
				}
			});
		});
	});
}
