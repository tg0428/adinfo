package com.cust.adinfo.dao;

import java.util.List;
import java.util.Map;
import com.cust.adinfo.model.book;

public interface bookDao extends baseDao {

	/**
	 * 添加图书
	 * 
	 * @param book
	 * @return
	 */
	public boolean add(book book);

	/**
	 * 更新图书图片
	 * 
	 * @param book
	 * @return
	 */
	public boolean upd_Pic(book book);

	/**
	 * 删除图书
	 * 
	 * @param id
	 * @return
	 */
	public boolean del(int id);

	/**
	 * 添加类型
	 * 
	 * @param type
	 * @return
	 */
	public boolean addType(String type_name);

	/**
	 * 删除类型
	 * 
	 * @param type
	 * @return
	 */
	public boolean delType(int id);

	/**
	 * 获取图书列表
	 * 
	 * @return
	 */
	public List<Map<String, Object>> list();

	/**
	 * 获取图书列表
	 * 
	 * @return
	 */
	public List<Map<String, Object>> list(int u_id);

	/**
	 * 获取指定图书
	 * 
	 * @return
	 */
	public List<Map<String, Object>> one(int b_id);

	/**
	 * 获取信息
	 * 
	 * @param sql
	 * @param args
	 * @return
	 */
	public List<Map<String, Object>> getInfo(String sql, Object[] args);

	/**
	 * 获取图书类型
	 * 
	 * @return
	 */
	public List<Map<String, Object>> getType();

	/**
	 * 获取图书借阅用户列表
	 * 
	 * @return
	 */
	public List<Map<String, Object>> getDestineUserList(int id);

	/**
	 * 借阅图书
	 * 
	 * @param id
	 * @return
	 */
	public boolean destine(int id, int u_id, int days);

	/**
	 * 还书
	 * 
	 * @param id
	 * @param u_id
	 * @return
	 */
	public boolean back(int id, int u_id);
}
