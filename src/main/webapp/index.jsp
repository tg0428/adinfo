<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>山西大学图书借阅管理系统 </title>
<link rel="stylesheet" href="resources/bootstrap/css/bootstrap.min.css">	
<link rel="stylesheet" href="resources/css/index.css">
<link rel="stylesheet" href="resources/css/bootstrapValidator.css">
<link rel="stylesheet" href="resources/css/buttons.css">
<link rel="stylesheet" href="resources/bootstrap/css/messenger.css">
<link rel="stylesheet" href="resources/bootstrap/css/messenger-theme-air.css">
<script type="text/javascript" src="resources/js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="resources/bootstrap/js/bootstrap.js"></script>
<script type="text/javascript" src="resources/bootstrap/js/bootbox.min.js"></script>
<script type="text/javascript" src="resources/js/bootstrapValidator.js"></script>
<script type="text/javascript" src="resources/bootstrap/js/messenger.min.js"></script>
</head>
<style>
      body {
        padding-top: 150px; /* 60px to make the container go all the way to the bottom of the topbar */
        background-color: #f5f5f5;
        font-family: "黑体";
      }
</style>
<script type="text/javascript">
$(function(){

	$._messengerDefaults = {
			extraClasses: 'messenger-fixed messenger-theme-air messenger-on-bottom messenger-on-right'
		}
	
	Messenger().post({
	  message: '欢迎使用山西大学图书借阅管理系统 ^-^',
	  type: 'info',
	});
})
	function showAbout(){
		bootbox.dialog({
		    title : "关于系统",
		    message : "<span><i class='icon-envelope'></i>&nbsp;本系统为山西大学图书借阅管理系统 ，诣在简化山西大学图书借阅管理的操作流程</span></br>"+
		    		  "<span><i class='icon-tags'></i>&nbsp;使用中常见的问题</span></br>"+
		    		  "<span style='display:block;padding-left:15px;padding-top:5px'>1. 忘记密码：可联系管理员，申请重置密码(密码重置后为：000000)</span></br>"+
		    		  "<span style='display:block;padding-left:15px'>2. 用户不能登陆：新注册的用户需等待管理员审核通过后方可登录</span></br>"+
		    		  "<span style='display:block;padding-left:15px'>3. 广告审核未通过：未通过审核的广告，管理员备注有不通过理由，企业可以修改后再次提交等待审核</span></br>"+
		    		  "<span style='display:block;padding-left:15px'>4. 广告不能删除：提交审核后的广告不能由企业用户删除，可联系管理员，申请删除 广告</span></br>",
		    buttons : {
		        "cancel" : {
		            "label" : "<i class='icon-thumbs-up'></i> 开始使用",
		            "className" : "btn-sm btn-info",
		            "callback" : function() { }
		        }
		    }
		});
	}
</script>
<body>
	<input type="hidden" value="${session_userMap.status }" id="status"/>
	<div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="brand" href="javascript:showAbout()">山西大学图书借阅管理系统 </a>
          <div class="nav-collapse collapse">
            <ul class="nav">
              <li class="active"><a href="#">主页</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>

    <div class="container">
    <div class="container-fluid">
		<div class="row-fluid">
			<div class="span8">
				<div class="carousel slide" id="carousel-158442">
					<ol class="carousel-indicators">
						<li class="active" data-slide-to="0" data-target="#carousel-158442">
						</li>
						<li data-slide-to="1" data-target="#carousel-158442">
						</li>
						<li data-slide-to="2" data-target="#carousel-158442">
						</li>
					</ol>
					<div class="carousel-inner">
						<div class="item active">
							<img alt="" src="resources/images/01.jpg" />
							<div class="carousel-caption">
								<h4>
									理工一角
								</h4>
								<p>
									最美理工 -----cust
								</p>
							</div>
						</div>
						<div class="item">
							<img alt="" src="resources/images/03.jpg" />
							<div class="carousel-caption">
								<h4>
									理工最难忘的记忆
								</h4>
								<p>
									最美记忆 ------cust
								</p>
							</div>
						</div>
						<div class="item">
							<img alt="" src="resources/images/04.jpg" />
							<div class="carousel-caption">
								<h4>
									理工气魄的风景
								</h4>
								<p>
									最美风景 -------cust
								</p>
							</div>
						</div>
					</div> <a data-slide="prev" href="#carousel-158442" class="left carousel-control">‹</a> <a data-slide="next" href="#carousel-158442" class="right carousel-control">›</a>
				</div>
			</div>
			<div class="span4">
				<div class="control-group success">
					<form class="form-signin" id="defaultForm" action="<%=request.getContextPath()%>/validateUser/login" method="post">
	        		<h2 class="form-signin-heading">登录</h2>
	        		<div class="form-group">
		        		<div class="col-lg-5">
	                        <input type="text" class="form-control" name="username"  placeholder="用户名"/>
	                    </div>
	                </div>
	                <div class="form-group">
	                    <div class="col-lg-5">
		        			<input type="password" class="form-control" name="password" placeholder="密码">
		        		</div>
	        		</div>
	        		<p style="font-size:10px"><span class="label label-success">提示</span>&nbsp;未注册用户请先注册</p>
	        		<button class="button button-glow button-rounded button-highlight button-tiny btn-default" data-toggle="modal" 
   									data-target="#myModal">注册</button>
	        		<button class="button button-glow button-rounded button-highlight button-tiny btn-default" id="validateBtn" type="submit">登录</button>
	      			</form>
      			</div>
			</div>
		</div>
	</div>
    </div> <!-- /container -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
   	<div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" 
               data-dismiss="modal" aria-hidden="true">
                  &times;
            </button>
            <h4 class="modal-title" id="myModalLabel">
              	 <i class="icon-user"></i>请填写您的注册信息
            </h4>
         </div>
         <div class="modal-body">
            	<div class="control-group success">
					<form class="form-signin" id="modalForm" action="<%=request.getContextPath()%>/validateUser/register" method="post">
					<div class="form-group">
						<label class="col-lg-3 control-label">*为必填项，请认真填写信息</label>
	                    <div class="col-lg-5">
	        				<input type="text" class="form-control" name="username" placeholder="用户名*">
	        			</div>
	        		</div>
	        		<div class="form-group">
	                    <div class="col-lg-5">
	        				<input type="text" class="form-control" name="companyName" placeholder="所属学院*">
	        			</div>
	        		</div>
	        		<div class="form-group">
	                    <div class="col-lg-5">
	        				<input type="text" class="form-control" name="contactor" placeholder="联系人*">
	        			</div>
	        		</div>
	        		<div class="form-group">
	                    <div class="col-lg-5">
	        				<input type="text" class="form-control" name="contact" placeholder="联系人电话*">
	        			</div>
	        		</div>
	        		<div class="form-group">
	                    <div class="col-lg-5">
	        				<input type="password" class="form-control" name="password" placeholder="密码*">
	        			</div>
	        		</div>
	        		<div class="form-group">
	                    <div class="col-lg-5">
	        				<input type="password" class="form-control" name="confirmPassword" placeholder="再次输入密码*">
	        			</div>
	        		</div>
	        		<button class="button button-glow button-rounded button-highlight button-tiny"  id="modalValidateBtn" type="submit">注册</button>
	        		<button type="button" class="button button-primary button-rounded button-tiny"  data-dismiss="modal">放弃注册 </button>
	        		</form>
      			</div>
         </div>
         <!-- <div class="modal-footer">
            
         </div> -->
      </div><!-- /.modal-content -->
</div><!-- /.modal -->
</div>
    <div id="footer">
      <div class="container">
        <p class="muted credit">@CopyRight&nbsp;&nbsp;山西大学软件工程毕业设计 </p>
      </div>
    </div>
</body>
<script type="text/javascript" src="resources/js/formValidators.js"></script>
</html>