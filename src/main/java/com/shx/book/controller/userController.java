package com.shx.book.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.shx.book.model.User;
import com.shx.book.model.modify;
import com.shx.book.model.result;
import com.shx.book.service.userService;

@Controller
@RequestMapping("/validateUser")
@SessionAttributes({ "session_userMap" })
public class userController {

	private userService mUserService;
	private result rs;
	private static Logger log = LoggerFactory.getLogger(userController.class);

	@Autowired
	public void setmUserService(userService mUserService) {
		this.mUserService = mUserService;
	}

	@ModelAttribute("session_user")
	public User populateUser() {
		return new User();
	}

	@SuppressWarnings("unchecked")
	public Map<String, ?> getMap(HttpSession session) {
		return (Map<String, ?>) session.getAttribute("session_userMap");
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public @ResponseBody result JsonForLogin(User user, ModelMap model) {

		rs = new result.Builder("true").username(user.getUsername()).builder();
		if (mUserService.Login(user)) {
			if ((Integer) mUserService.GetUser(user).get("status") == 2) {
				log.debug("user login success");
				rs.setMsg("登录成功");
				model.addAttribute("session_userMap", mUserService.GetUser(user));
			} else if ((Integer) mUserService.GetUser(user).get("status") == 1) {
				rs.setValid("false");
				rs.setMsg("请等待管理审核，审核通过后方可登录");
			} else if ((Integer) mUserService.GetUser(user).get("status") == 3) {
				rs.setValid("false");
				rs.setMsg("对不起，审核未通过,了解详情请联系管理员");
			}
		} else {
			rs.setValid("false");
			rs.setMsg("登录失败！用户名或密码错误 ，请重新输入");
			log.debug("user login failed");
		}
		return rs;
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public @ResponseBody result JsonForRegister(@ModelAttribute User user) {
		rs = new result.Builder("true").username(user.getUsername()).builder();
		if (mUserService.Register(user)) {
			log.debug("user register success");
			rs.setMsg("注册成功");
		} else {
			log.debug("user register failed");
			rs.setValid("false");
			rs.setMsg("用户名已存在");
		}
		return rs;
	}

	@RequestMapping(value = "/logout", method = RequestMethod.POST)
	public @ResponseBody result JsonForLogout(HttpSession session, HttpServletRequest req) {

		session.removeAttribute("session_userMap");
		req.getSession().removeAttribute("session_userMap");
		req.getSession().invalidate();
		rs = new result.Builder("true").builder();
		return rs;
	}

	@RequestMapping(value = "/modify", method = RequestMethod.POST)
	public @ResponseBody result JsonForModifyPoresanlInfo(@ModelAttribute modify m, HttpSession session) {
		if (mUserService.UpdateUserPassword(m.getOldPass(), m.getNewPass(),
				(String) this.getMap(session).get("name"))) {
			rs = new result.Builder("true").msg("修改信息成功，下次请用新密码登录").builder();
		} else {
			rs = new result.Builder("false").msg("原始密码不正确").builder();
		}
		return rs;
	}

	@RequestMapping(value = "/addAssister", method = RequestMethod.POST)
	public @ResponseBody result JsonForAddAssister(@ModelAttribute User user) {
		rs = new result.Builder("true").username(user.getUsername()).builder();
		if (mUserService.AddUser(user)) {
			log.debug("assister add success");
			rs.setMsg("添加管理员成功");
		} else {
			log.debug("assister add failed");
			rs.setValid("false");
			rs.setMsg("用户名已存在");
		}
		return rs;
	}

	@RequestMapping(value = "/getAssister", method = RequestMethod.GET)
	public @ResponseBody List<Map<String, Object>> JsonForGetAssister() {
		return mUserService.GetAssister();
	}

	@RequestMapping(value = "/resetUser", method = RequestMethod.POST)
	public @ResponseBody result JsonForResetUser(int id) {

		rs = new result.Builder("true").builder();
		if (mUserService.ResetUser(id)) {
			rs.setMsg("重置成功,新密码为：000000");
		} else {
			rs.setMsg("重置失败");
		}
		return rs;
	}

}
