<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:forEach items="${booklist}" var="item">
	<div class="sponsor" title="点击翻转查看">
		<div class="sponsorFlip">
			<img src="${item.b_cover_server_url}" width=140 height=140 />
		</div>

		<div class="sponsorData">
			<div class="fs">图书名称：${item.b_name}</div>
			<div class="fs">图书类别：${item.type_name}</div>
			<div class="fs">图书存量：${item.b_total_amount}</div>
			<div class="fs">图书可借时长：${item.b_borrow_duration}天</div>
			<div class="sponsorURL">
				<a href="javascript:destine(${item.b_id },${session_userMap.id},${item.b_borrow_duration })">借阅</a>
			</div>
		</div>
	</div>
</c:forEach>
<div class="clear"></div>
<script type="text/javascript" src="/adinfo/resources/js/script.js"></script>
<script type="text/javascript"
	src="/adinfo/resources/js/jquery.flip.min.js"></script>
<script>
	function destine(id, u_id, days) {
		$.get("/adinfo/manager/destine?id=" + id + "&u_id=" + u_id + "&days="
				+ days, function(data) {
			$("#booklist").modal('hide');
			showTips(data.msg);
			var u_id = $("#userId").val();
			destroyTable();
			initDestineTable(managerDestineOperateFormatter);
			refresh("#destineTable", 'getDestineBook?u_id=' + u_id);
		})
	}
</script>