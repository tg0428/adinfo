package com.shx.book.controller;

import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shx.book.model.result;
import com.shx.book.service.managerService;

@Controller
@RequestMapping("/manager")
public class managerController {

	private managerService mManagerService;
	private result rs;

	@SuppressWarnings("unchecked")
	public Map<String, ?> getMap(HttpSession session) {
		return (Map<String, ?>) session.getAttribute("session_userMap");
	}

	@Autowired
	public void setmManagerService(managerService mManagerService) {
		this.mManagerService = mManagerService;
	}

	@RequestMapping(value = "/getUsers", method = RequestMethod.GET)
	public @ResponseBody List<Map<String, Object>> JsonForRegisterUser(int roleId, int status) {
		return mManagerService.GetRegisterUsers(roleId, status);
	}

	@RequestMapping(value = "/getOneUser", method = RequestMethod.GET)
	public @ResponseBody List<Map<String, Object>> JsonForOneUser(int id) {
		return mManagerService.GetUserInfo(id);
	}

	@RequestMapping(value = "/getDir", method = RequestMethod.POST)
	public @ResponseBody List<Map<String, Object>> GetDirMappingRole(HttpSession session) {
		return mManagerService.GetDir(this.getMap(session));
	}

	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public String Redirect2Home() {
		return "home";
	}

	@RequestMapping(value = "/delUser", method = RequestMethod.GET)
	public @ResponseBody result JsonForDeleteUser(int id) {
		rs = new result.Builder("true").msg("用户信息删除成功").builder();
		if (mManagerService.DelUser(id)) {
			return rs;
		} else {
			rs.setValid("false");
			rs.setMsg("删除失败");
			return rs;
		}
	}

	@RequestMapping(value = "/passUser", method = RequestMethod.GET)
	public @ResponseBody result JsonForPassUser(int id, HttpSession session) {
		if (mManagerService.passUser(id, (Integer) this.getMap(session).get("id"))) {
			rs = new result.Builder("true").msg("审核通过").builder();
		}
		return rs;
	}

	@RequestMapping(value = "/unPassUser", method = RequestMethod.GET)
	public @ResponseBody result JsonForUnPassUser(int id, HttpSession session) {
		if (mManagerService.unPassUser(id, (Integer) this.getMap(session).get("id"))) {
			rs = new result.Builder("true").msg("审核未通过").builder();
		}
		return rs;
	}
}
