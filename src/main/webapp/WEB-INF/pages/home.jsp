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
		background-color: #FFFFFF;
	}
</style>
<body>
	<%--  便于单独js获得role_id的值，添加一个隐藏的input  --%>
	<input type="hidden" value="${session_userMap.role_id}" id="roleId"/>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
				<div class="well well-lg" style="margin-top: 10px; font-size: 30px;background-color:#000000;color:#FFFFFF;">
					广告发布与管理系统 
					<span class="label label-success">${session_userMap.name}</span>&nbsp;
					<span class="label label-info" id="time"></span>
					<span style="float:right;">
						<button id="logout" type="button"
							class="button button-glow button-rounded button-highlight button-tiny btn-default"
							data-toggle="tooltip" data-placement="left" title="点此退出系统">
							注销</button>
					</span>
				</div>
				<div class="row-fluid">
					<div class="col-xs-6 span2">
						<div class="well well-lg">
							<div class="panel-body">
								<ul class="nav nav-list" id="operate_field">
									<li class="active"><a>个人操作区</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-xs-6 span10">
						<div class="well well-lg" id="well">
							<div class="btn-group" id="toolBarDiv">
								<button id="addAd" type="button" class="btn btn-info btn-small" data-toggle="modal" 
   										data-target="#add">添加广告</button>
							</div>
							<table id="managerTable"></table>
							<table id="adinfoTable"></table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<jsp:include page="popAdinfoWindow.jsp"></jsp:include>
	<jsp:include page="moreInfo.jsp"></jsp:include>
	<jsp:include page="footer.jsp"></jsp:include>
</body>
</html>