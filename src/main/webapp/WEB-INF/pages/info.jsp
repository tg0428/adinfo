<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<jsp:include page="header.jsp"></jsp:include>
<title>Insert title here</title>
</head>
<style>
	body {
		font-family: "黑体";
		font-size: 15px;
		background-color: #FFFAFA;
		padding-top: 70px;
	}
</style>
<body>
	<%--  便于单独js获得role_id的值，添加一个隐藏的input  --%>
	<input type="hidden" value="${session_userMap.role_id}" id="roleId"/>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
			<nav class="navbar navbar-inverse navbar-fixed-top" style="background:url(/adinfo/resources/images/head.png);background-size:cover">
  				<div class="container">
			
				<!-- <div class="well well-lg" style="background:url(/adinfo/resources/images/head.jpg);background-size:cover; color:#474747;"> -->
				<p class="navbar-text navbar-left" style="margin-top:20px"><span style="font-size: 30px;color:white;">山西大学图书借阅管理系统</span></p>
				<p class="navbar-text navbar-left" style="margin-top:25px"><span class="label label-success">${session_userMap.name}</span></p>
				<p class="navbar-text navbar-left" style="margin-top:25px"><span class="label label-info" id="time"></span></p>
				<p class="navbar-text navbar-right" style="margin-top:20px">
					<span style="float:right;">
						<button id="logout" type="button"
							class="button button-glow button-rounded button-highlight button-tiny btn-default"
							data-toggle="tooltip" data-placement="left" title="点此退出系统">
							注销</button>
					</span>
				</p>
				<!-- </div> -->
				</div>
			</nav>
				<div class="row-fluid">
					<div class="col-xs-12 span12">
						<div class="panel panel-info">
							<div class="panel-heading">提示</div>
							 <div class="panel-body">
							 	<p style="text-align:center">${msg.msg }</p>
							 	<p style="text-align:center;"><a href="/adinfo/manager/home.action" style="color:#FF3030">返回首页</a></p>
							 </div>
						</div>
					</div>
			</div>
		</div>
	</div>
	</div>
	<jsp:include page="footer.jsp"></jsp:include>
</body>
</html>