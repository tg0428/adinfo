<%@page import="java.util.Map"%>
<%@ page import="com.cust.adinfo.utils.webGetDate"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
<jsp:include page="header.jsp"></jsp:include>
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
	<input type="hidden" value="${session_userMap.id}" id="userId"/>
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
					<div class="col-xs-3 span3">
						<div class="panel panel-primary">
							<div class="panel-heading">操作面板</div>
							 <div class="panel-body">
							 	<ul id="operate_field" class="ztree"></ul>
							 </div>
						</div>
					</div>
					<div class="col-xs-9 span9">
						<div class="panel panel-default" id="well" style="font-size:13px">
						  <div class="panel-body">
						    	<table id="managerTable"></table>
								<table id="bookTable"></table>
								<table id="typeTable"></table>
								<table id="destineTable"></table>
						  </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<jsp:include page="moreInfo.jsp"></jsp:include>
	<jsp:include page="footer.jsp"></jsp:include>
	<jsp:include page="upload.jsp"></jsp:include>
	<jsp:include page="selfbooklist.jsp"></jsp:include>
	<jsp:include page="popBookList.jsp"></jsp:include>
	<jsp:include page="userList.jsp"></jsp:include>
</body>
</html>