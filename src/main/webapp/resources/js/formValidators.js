/**
 * defaultForm Validate block validate the username and password username
 * can not be empty password can not be empty username's length can be
 * between 6 and 15,and username can only consist of alphabetical, number,
 * dot and underscore
 */
$(document).ready(function(){
	$('#defaultForm').bootstrapValidator({
		live : 'disabled',
		message : 'This value is not valid',
		feedbackIcons : {
			valid : 'glyphicon glyphicon-ok',
			invalid : 'glyphicon glyphicon-remove',
			validating : 'glyphicon glyphicon-refresh'
		},
		fields : {
			username : {
				message : 'The username is not valid',
				validators : {
					notEmpty : {
						message : '用户名不能为空'
					},
					stringLength : {
						min : 6,
						max : 10,
						message : '用户名长度为6-10位'
					},
					regexp : {
						regexp : /^[a-zA-Z0-9_\.]+$/,
						message : '用户名只能由字母、数字、点和下划线组成'
					}
				}
			},
			password : {
				validators : {
					notEmpty : {
						message : '密码不能为空'
					},
					stringLength : {
						min : 6,
						max : 15,
						message : '密码长度为6-15位'
					},
					regexp : {
						regexp : /^[a-zA-Z0-9_\.]+$/,
						message : '密码只能由字母、数字、点和下划线组成'
					}
				}
			},
		}
	}).on('success.form.bv', function(e) { 
        // Prevent submit form
        e.preventDefault();
        $.post($('#defaultForm').attr('action'),$('#defaultForm').serialize(),function(result){
        	if(result.valid == 'true'){
        		location.href="manager/home.action"
        	} else {
        		bootbox.setLocale("zh_CN");
        		bootbox.alert(result.msg);
        	}
        },"json");
    });

	/*// Validate the form manually
	$('#validateBtn').click(function() {
		$('#defaultForm').bootstrapValidator('validate');
	});*/

	/**
	 * modalForm Validate block validate the username and password ，phoneNumber
	 * username can not be empty password can not be empty phoneNumber can not
	 * be empty username's length can be between 6 and 15,and username can only
	 * consist of alphabetical, number, dot and underscore
	 */
	$('#modalForm').bootstrapValidator({
		live : 'disabled',
		message : 'This value is not valid',
		feedbackIcons : {
			valid : 'glyphicon glyphicon-ok',
			invalid : 'glyphicon glyphicon-remove',
			validating : 'glyphicon glyphicon-refresh'
		},
		fields : {
			username : {
				message : '用户名不合法',
				validators : {
					notEmpty : {
						message : '用户名不能为空'
					},
					stringLength : {
						min : 6,
						max : 10,
						message : '用户名长度为6-10位'
					},
					regexp : {
						regexp : /^[a-zA-Z0-9_\.]+$/,
						message : '用户名只能由字母、数字、点和下划线组成'
					}
				}
			},
			password : {
				validators : {
					notEmpty : {
						message : '密码不能为空'
					},
					stringLength : {
						min : 6,
						max : 15,
						message : '密码长度为6-15位'
					},
					regexp : {
						regexp : /^[a-zA-Z0-9_\.]+$/,
						message : '密码只能由字母、数字、点和下划线组成'
					}
				}
			},
			confirmPassword : {
				validators : {
					notEmpty : {
						message : '确认密码不能为空'
					},
					stringLength : {
						min : 6,
						max : 15,
						message : '密码长度为6-15位'
					},
					regexp : {
						regexp : /^[a-zA-Z0-9_\.]+$/,
						message : '密码只能由字母、数字、点和下划线组成'
					},
					identical : {
						field : 'password',
						message : '两次密码不一致'
					}
				}
			},
			contact : {
				validators : {
					notEmpty : {
						message : '联系方式不能为空'
					},
					digits : {
						message : '联系方式只能包含数字'
					},
					stringLength : {
						min : 11,
						max : 11,
						message : '电话格式不对'
					},
				}
			},
			contactor : {
				validators : {
					notEmpty : {
						message : '联系人不能为空'
					}
				}
			},
			companyName : {
				validators : {
					notEmpty : {
						message : '公司名称不能为空'
					}
				}
			}
		}
	}).on('success.form.bv', function(e) { 
        // Prevent submit form
        e.preventDefault();
        e.preventDefault();
        $.post($('#modalForm').attr('action'),$('#modalForm').serialize(),function(result){
        	bootbox.setLocale("zh_CN");
        	if(result.valid == true || result.valid == 'true'){
        		$('#myModal').modal('hide');
        		bootbox.alert(result.msg);
        	} else {
        		$('#myModal').modal('hide');
        		bootbox.alert(result.msg);
        	}
        },"json");
    });
	
	$("#myModal").on('hidden.bs.modal',function(){
		$('input').each(function(){
			$(this).val("");
		})
	})
});
