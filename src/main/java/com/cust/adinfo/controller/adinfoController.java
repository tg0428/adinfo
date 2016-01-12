package com.cust.adinfo.controller;

import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.builder.ReflectionToStringBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.cust.adinfo.model.ad;
import com.cust.adinfo.model.result;
import com.cust.adinfo.service.adinfoService;

@Controller
@RequestMapping("/manager")
public class adinfoController {
	
	private static Logger log = LoggerFactory.getLogger(adinfoController.class);
	private adinfoService mAdinfoService;
	private result rs;
	
	@SuppressWarnings("unchecked")
	public Map<String, ?> getMap(HttpSession session) {
		return (Map<String, ?>) session.getAttribute("session_userMap");
	}

	@Autowired
	public void setmAdinfoService(adinfoService mAdinfoService) {
		this.mAdinfoService = mAdinfoService;
	}
	
	@RequestMapping(value = "/submitJudge", method = RequestMethod.GET)
	public @ResponseBody result JsonForSubmitJudge(int id) {
		if (mAdinfoService.SubmitAd(id)) {
			rs = new result.Builder("true").msg("提交审核成功").builder();
		}
		return rs;
	}
	
	@RequestMapping(value = "/addAd", method = RequestMethod.POST)
	public @ResponseBody result JsonForAddAd(@ModelAttribute ad ad) {
		if (mAdinfoService.AddNewAd(ad)) {
			rs = new result.Builder("true").msg("添加广告成功").builder();
		}
		return rs;
	}
	
	@RequestMapping(value = "/modifyAd", method = RequestMethod.POST)
	public @ResponseBody result JsonForModifyAd(@ModelAttribute ad ad) {
		log.debug(ReflectionToStringBuilder.toString(ad));
		if (mAdinfoService.ModifyAd(ad)) {
			rs = new result.Builder("true").msg("修改广告成功").builder();
		} else {
			rs = new result.Builder("false").msg("修改广告失败").builder();
		}
		return rs;
	}
	
	@RequestMapping(value = "/getAd", method = RequestMethod.GET)
	public @ResponseBody List<Map<String,Object>> GetAdinfo(HttpSession session){
		log.debug(""+(Integer)getMap(session).get("id"));
		return mAdinfoService.GetUnipueUserAd((Integer)getMap(session).get("id"));
	}
	
	@RequestMapping(value = "/getAllAd", method = RequestMethod.GET)
	public @ResponseBody List<Map<String,Object>> GetAllAdinfo(){
		return mAdinfoService.GetAllAd();
	}
	
	@RequestMapping(value = "/getType", method = RequestMethod.GET)
	public @ResponseBody List<Map<String,Object>> GetType(){
		return mAdinfoService.GetType();
	}
}
