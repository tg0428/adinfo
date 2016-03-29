package com.shx.book.utils;

import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

public class webFilter implements HandlerInterceptor {

	private static Logger log = LoggerFactory.getLogger(webFilter.class);

	public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {

	}

	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3)
			throws Exception {

	}

	@SuppressWarnings("unchecked")
	public boolean preHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2) throws Exception {

		String path = arg0.getRequestURL().toString();
		Map<String, ?> map = (Map<String, ?>) arg0.getSession().getAttribute("session_userMap");
		arg0.setCharacterEncoding("utf-8");
		log.debug("/****path is :****/ ");
		log.debug(path);

		if (path.endsWith("/adinfo") || path.endsWith("/index.jsp") || path.endsWith("/login")
				|| path.endsWith("/register")) {
			return true;
		} else {
			if (map == null) {
				log.debug("用户未登录");
				PrintWriter out = arg1.getWriter();
				out.write("<script type='text/javascript'>alert('please Login first!!!');window.top.location.href='"
						+ arg0.getContextPath() + "';</script>");
				out.flush();
				out.close();
				return false;
			} else {
				return true;
			}
		}
	}
}
