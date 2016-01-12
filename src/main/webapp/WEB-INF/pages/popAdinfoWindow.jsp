<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<style>
#detail { 
	width: 250px; 
	font-size: 14px;
	height: 300px; 
	line-height: 24px;
}
</style>
<div id="add" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">
                    <i class="icon-pencil"></i>
                    <span id="lblAddTitle" style="font-weight:bold">添加广告信息</span>
                </h4>
            </div>
            <form class="form-horizontal form-bordered form-row-strippe" id="ffAdd" data-toggle="validator" enctype="multipart/form-data" method="post">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group" style="padding-bottom:10px">
                                <label class="control-label col-md-2">广告类型&nbsp;</label>
                                <div class="col-lg-5">
                                    <select id="type" name="type" type="text" class="form-control select2" placeholder="" >
                                    	<option>--------------请选择--------------</option>
									</select>&nbsp;<span id="selectMsg" style="font-size:10px"></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12" style="padding-bottom:10px">
                            <div class="form-group">
                                <label class="control-label col-md-2">广告标题&nbsp;</label>
                                <div class="col-lg-5">
                                    <input id="adName" name="adName" type="text" class="form-control" placeholder="广告标题..." />&nbsp;<span id="titleMsg" style="font-size:10px"></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12" style="padding-bottom:10px">
                            <div class="form-group">
                                <label class="control-label col-md-2">广告具体描述&nbsp;</label>
                                <div class="col-lg-5">
                                    <textarea id="detail" name="detail" class="form-control" placeholder="广告具体描述..."></textarea>&nbsp;<span id="detailMsg" style="font-size:10px"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer bg-info">
                    <input type="hidden" id="userId" name="userId" value="${session_userMap.id}" />
                    <div class="btn-group">
                    	<button type="button" class="btn btn-primary" id="modifyAd" disabled>修改</button>
	                    <button type="button" class="btn btn-primary" id="saveAd">添加</button>
	                    <button type="button" class="btn btn-warning" data-dismiss="modal">取消</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>