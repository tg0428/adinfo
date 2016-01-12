package com.cust.adinfo.dao;

import java.util.Map;

/**
 * @author guoyidong 针对dbo.user表的 ： save，delete，update，get操作
 */
public interface baseDao {

	/**企业注册的save方法
	 * @param username
	 *            : 用户名
	 * @param password
	 *            : 密码
	 * @param companyName
	 *            : 公司名称
	 * @param contact
	 *            : 联系方式
	 * @param roleId
	 *            : 角色id
	 * @return
	 */
	public boolean save(String username, String password, String companyName, String contactor, String contact, int roleId, String register_time);
	
	/**管理员添加辅助用户的save方法
	 * @param username:用户名
	 * @param password:密码
	 * @param roleId:角色id
	 * @return
	 */
	public boolean save(String username, String password, int roleId);

	/**
	 * @param username
	 *            : 用户名
	 * @param password
	 *            : 密码
	 */
	public boolean update(String username, String password);


	/**
	 * @param username	: 用户名
	 * @return
	 */
	public Map<String, ?> get(String username);
	
}
