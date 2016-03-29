<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<div id="upload_pic" class="modal fade" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true">&times;</button>
				<h4 class="modal-title">
					<span class="glyphicon glyphicon-book" style="font-weight: bold">&nbsp;上传图片</span>
				</h4>
			</div>
				<div class="modal-body">
					<form enctype="multipart/form-data" id="pic_upload" method="POST" action="updPic">
						<input type="hidden" name="id" id="id"/>
		                <input id="file-0" class="file" type="file" name="file" multiple data-min-file-count="1">
		                <br>
		                <button type="submit" class="btn btn-primary">上传</button>
		                <button type="reset" class="btn btn-default">重置</button>
		            </form>
				</div>
		</div>
	</div>
</div>
<script>
$("#file-0").fileinput({
    allowedFileExtensions : ['jpg', 'png','gif'],
    slugCallback: function(filename) {
        return filename.replace('(', '_').replace(']', '_')
    }
});
</script>