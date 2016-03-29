<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<style>
#detail {
	width: 250px;
	font-size: 14px;
	height: 150px;
	line-height: 24px;
}
</style>
<div id="add" class="modal fade" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true">&times;</button>
				<h4 class="modal-title">
					<span id="lblAddTitle" class="glyphicon glyphicon-book" style="font-weight: bold">&nbsp;添加新图书</span>
				</h4>
			</div>
			<form class="form-horizontal" role="form" id="ffAdd" data-toggle="validator" enctype="multipart/form-data" method="post">
				<div class="modal-body">
					<div class="form-group">
						<label for="b_type" class="control-label col-sm-4">图书类型</label>
						<div class="col-sm-5">
							<select id="b_type" name="b_type" type="text"
								class="form-control select2">
								<option>请选择图书类型</option>
							</select>&nbsp;<span id="b_type_tip" style="font-size: 10px;display:none"></span>
						</div>
					</div>
					<div class="form-group">
						<label for="b_name" class="control-label col-sm-4">图书名称</label>
						<div class="col-sm-5">
							<input id="b_name" name="b_name" type="text"
								class="form-control" placeholder="图书名称..." required/>&nbsp;<span
								id="b_name_tip" style="font-size: 10px;display:none"></span>
						</div>
					</div>
					<div class="form-group">
						<label for="b_total_amount" class="control-label col-sm-4">图书数量</label>
						<div class="col-sm-5">
							<input id="b_total_amount" name="b_total_amount" type="text"
								class="form-control" placeholder="图书数量(请填写数字)..." required/>&nbsp;<span
								id="b_total_amount_tip" style="font-size: 10px;display:none"></span>
						</div>
					</div>
					<div class="form-group">
						<label for="b_borrow_duration" class="control-label col-sm-4">单本可借时长</label>
						<div class="col-sm-5">
							<input id="b_borrow_duration" name="b_borrow_duration" type="text"
								class="form-control" placeholder="单本可借时长(请填写数字)..." required/>&nbsp;<span
								id="b_borrow_duration_tip" style="font-size: 10px;display:none"></span>
						</div>
					</div>
					<div class="form-group">
						<label for="b_detail" class="control-label col-sm-4">图书简介</label>
						<div class="col-sm-5">
							<textarea id="b_detail" name="b_detail" class="form-control" rows=7
								placeholder="图书简介..." required></textarea>
							&nbsp;<span id="b_detail_tip" style="font-size: 10px;display:none"></span>
						</div>
					</div>
				</div>
				<div class="modal-footer bg-info">
					<input type="hidden" id="userId" name="userId"
						value="${session_userMap.id}" />
					<div class="btn-group">
						<button type="button" class="btn btn-primary" id="saveBook">添加</button>
						<button type="button" class="btn btn-warning" data-dismiss="modal">取消</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>