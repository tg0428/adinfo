package com.shx.book.dao;

import java.util.List;
import java.util.Map;

public interface userDao extends baseDao {

	/**
	 * 根据id删除用户信息
	 * 
	 * @param id
	 *            : id
	 * @return
	 */
	public boolean delete(int id);

	/**
	 * 获取辅助管理员用户列表
	 * 
	 * @return
	 */
	public List<Map<String, Object>> getAssist();

	/**
	 * 重置方法
	 * 
	 * @param id
	 * @return
	 */
	public boolean reset(int id);

}
