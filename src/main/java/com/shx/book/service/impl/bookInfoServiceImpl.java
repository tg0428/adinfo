package com.shx.book.service.impl;

import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

import com.shx.book.dao.bookDao;
import com.shx.book.model.book;
import com.shx.book.service.bookInfoService;

@Service("bookInfoService")
public class bookInfoServiceImpl extends BaseServiceImpl implements bookInfoService {

	private bookDao mBookDao;

	@Resource(name = "bookDaoImpl")
	public void setmBookDao(bookDao mBookDao) {
		this.mBookDao = mBookDao;
	}

	public List<Map<String, Object>> GetAllBook() {
		return mBookDao.list();
	}

	public List<Map<String, Object>> GetUnipueBook(int b_id) {
		return mBookDao.one(b_id);
	}

	public boolean AddNewBook(book book) {
		return mBookDao.add(book);
	}

	public List<Map<String, Object>> GetType() {
		return mBookDao.getType();
	}

	public boolean AddNewType(String type_name) {
		return mBookDao.addType(type_name);
	}

	public boolean DelType(int id) {
		return mBookDao.delType(id);
	}

	public boolean updateBooKPic(book book) {
		return mBookDao.upd_Pic(book);
	}

	public boolean DelBook(int id) {
		return mBookDao.del(id);
	}

	public boolean DestineBook(int id, int u_id, int days) {
		return mBookDao.destine(id, u_id, days);
	}

	public List<Map<String, Object>> DestineBookList(int u_id) {
		return mBookDao.list(u_id);
	}

	public boolean BackBook(int id, int u_id) {
		return mBookDao.back(id, u_id);
	}

	public List<Map<String, Object>> GetAllDestineUserList(int id) {
		return mBookDao.getDestineUserList(id);
	}

}
