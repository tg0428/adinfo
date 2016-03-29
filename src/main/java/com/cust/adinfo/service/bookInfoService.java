package com.cust.adinfo.service;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Service;
import com.cust.adinfo.model.book;

@Service
public interface bookInfoService extends BaseService {

	/**
	 * 借阅书籍
	 * 
	 * @param b_id
	 *            : 图书id
	 * @return
	 */
	public boolean DestineBook(int id, int u_id, int days);

	/**
	 * 读者书籍列表
	 * 
	 * @param b_id
	 *            : 图书id
	 * @return
	 */
	public List<Map<String, Object>> DestineBookList(int u_id);

	/**
	 * 返回全部图书
	 * 
	 * @return
	 */
	public List<Map<String, Object>> GetAllBook();

	/**
	 * 返回全部图书借阅用户列表
	 * 
	 * @return
	 */
	public List<Map<String, Object>> GetAllDestineUserList(int id);

	/**
	 * 返回指定id用户的图书信息
	 * 
	 * @param user_id
	 * @return
	 */
	public List<Map<String, Object>> GetUnipueBook(int b_id);

	/**
	 * 添加新的图书
	 * 
	 * @param ad
	 * @return
	 */
	public boolean AddNewBook(book book);

	/**
	 * 更新图书图片
	 * 
	 * @param ad
	 * @return
	 */
	public boolean updateBooKPic(book book);

	/**
	 * 添加新的图书类型
	 * 
	 * @param ad
	 * @return
	 */
	public boolean AddNewType(String type_name);

	/**
	 * 返回type数集
	 * 
	 * @param user_id
	 * @return
	 */
	public List<Map<String, Object>> GetType();

	/**
	 * 删除类型
	 * 
	 * @param id
	 * @return
	 */
	public boolean DelType(int id);

	/**
	 * 删除图书
	 * 
	 * @param id
	 * @return
	 */
	public boolean DelBook(int id);

	/**
	 * 归还图书
	 * 
	 * @param id
	 * @param u_id
	 * @return
	 */
	public boolean BackBook(int id, int u_id);

}
