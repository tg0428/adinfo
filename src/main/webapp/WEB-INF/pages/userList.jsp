<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div id="userlist" class="modal fade" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true">&times;</button>
				<h4 class="modal-title">
					<span class="glyphicon glyphicon-book" style="font-weight: bold" id="book_head">&nbsp;借阅列表</span>
				</h4>
			</div>
			<div class="modal-body">
				<div class="list-group" id="content">
					<a class='list-group-item active' id="user_tip" style="text-align:center;color:yellow;font-size:18px">暂无信息</a>
				</div>
			</div>
		</div>
	</div>
</div>
<script>
	$(function() {
		$("#userlist").on('hidden.bs.modal', function() {
			$("#userlist #content").children("a").not(":first").remove();
			$("#user_tip").show();
		})
	})
</script>

