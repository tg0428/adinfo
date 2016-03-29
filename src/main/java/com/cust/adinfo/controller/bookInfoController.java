package com.cust.adinfo.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import com.cust.adinfo.model.book;
import com.cust.adinfo.model.result;
import com.cust.adinfo.service.bookInfoService;

@Controller
@RequestMapping("/manager")
public class bookInfoController {

	private static Logger log = LoggerFactory.getLogger(bookInfoController.class);
	private bookInfoService mBookInfoService;
	private result rs;

	@SuppressWarnings("unchecked")
	public Map<String, ?> getMap(HttpSession session) {
		return (Map<String, ?>) session.getAttribute("session_userMap");
	}

	@Autowired
	public void setmBookInfoService(bookInfoService mBookInfoService) {
		this.mBookInfoService = mBookInfoService;
	}

	@RequestMapping(value = "/addBook", method = RequestMethod.POST)
	public @ResponseBody result JsonForAddBook(@ModelAttribute book book) {
		if (mBookInfoService.AddNewBook(book)) {
			rs = new result.Builder("true").msg("添加图书成功").builder();
		}
		return rs;
	}

	@RequestMapping(value = "/delBook", method = RequestMethod.GET)
	public @ResponseBody result JsonForDelBook(int id) {
		if (mBookInfoService.DelBook(id)) {
			rs = new result.Builder("true").msg("删除图书成功").builder();
		}
		return rs;
	}

	@RequestMapping(value = "/getBook", method = RequestMethod.GET)
	public @ResponseBody List<Map<String, Object>> GetBook(HttpSession session) {
		log.debug("" + (Integer) getMap(session).get("id"));
		return mBookInfoService.GetUnipueBook((Integer) getMap(session).get("id"));
	}

	@RequestMapping(value = "/getDestineBook", method = RequestMethod.GET)
	public @ResponseBody List<Map<String, Object>> GetDestineBook(int u_id) {
		return mBookInfoService.DestineBookList(u_id);
	}

	@RequestMapping(value = "/getAllBook", method = RequestMethod.GET)
	public @ResponseBody List<Map<String, Object>> GetAllBook() {
		return mBookInfoService.GetAllBook();
	}

	@RequestMapping(value = "/getBooksForUser", method = RequestMethod.GET)
	public ModelAndView GetBooksForUser() {
		ModelAndView view = new ModelAndView();
		List<Map<String, Object>> list = mBookInfoService.GetAllBook();
		view.addObject("booklist", list);
		view.setViewName("list");
		return view;
	}

	@RequestMapping(value = "/getType", method = RequestMethod.GET)
	public @ResponseBody List<Map<String, Object>> GetType() {
		return mBookInfoService.GetType();
	}

	@RequestMapping(value = "/addType", method = RequestMethod.POST)
	public @ResponseBody result AddType(String type_name) {
		if (mBookInfoService.AddNewType(type_name)) {
			rs = new result.Builder("true").msg("添加成功").builder();
		} else {
			rs = new result.Builder("false").msg("添加失败,请检查类型是否已经存在！").builder();
		}
		return rs;
	}

	@RequestMapping(value = "/delType", method = RequestMethod.GET)
	public @ResponseBody result DelType(int type_id) {
		if (mBookInfoService.DelType(type_id)) {
			rs = new result.Builder("true").msg("图书类型删除成功").builder();
		} else {
			rs = new result.Builder("false").msg("图书类型删除失败").builder();
		}
		return rs;
	}

	@RequestMapping(value = "/updPic", method = RequestMethod.POST)
	public ModelAndView UploadPic(int id, MultipartFile file, HttpServletRequest req) throws IOException {

		ModelAndView view = new ModelAndView();
		String dir = req.getSession().getServletContext().getRealPath("/upload");
		long time_stemp = System.currentTimeMillis();
		book b = new book();
		rs = new result.Builder("").msg("图片上传失败").builder();

		if (file != null) {
			FileUtils.copyInputStreamToFile(file.getInputStream(),
					new File(dir, time_stemp + file.getContentType().replace("image/", ".")));
			b.setB_cover_url(dir + "\\" + time_stemp + file.getContentType().replace("image/", "."));
			b.setB_cover_server_url(req.getSession().getServletContext().getContextPath() + "/upload/" + time_stemp
					+ file.getContentType().replace("image/", "."));
			b.setB_id(id);
			mBookInfoService.updateBooKPic(b);
			rs.setMsg("图片上传成功");
		}
		view.addObject("msg", rs);
		view.setViewName("info");
		return view;
	}

	@RequestMapping(value = "/destine", method = RequestMethod.GET)
	public @ResponseBody result DestineBook(int id, int u_id, int days) {
		if (mBookInfoService.DestineBook(id, u_id, days)) {
			rs = new result.Builder("true").msg("图书借阅成功").builder();
		} else {
			rs = new result.Builder("false").msg("图书借阅失败,您已借阅该图书,请归还后再进行此操作").builder();
		}
		return rs;
	}

	@RequestMapping(value = "/back", method = RequestMethod.POST)
	public @ResponseBody result BackBook(int id, int u_id) {
		if (mBookInfoService.BackBook(id, u_id)) {
			rs = new result.Builder("true").msg("图书归还成功").builder();
		} else {
			rs = new result.Builder("false").msg("图书归还出错").builder();
		}
		return rs;
	}

	@RequestMapping(value = "/getUserlist", method = RequestMethod.GET)
	public @ResponseBody List<Map<String, Object>> GetUserlist(int id) {
		return mBookInfoService.GetAllDestineUserList(id);
	}

}
