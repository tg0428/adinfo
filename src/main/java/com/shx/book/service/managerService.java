package com.shx.book.service;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Service;

@Service
public interface managerService extends BaseService {

	/**
	 * 用户审核通过
	 * 
	 * @param user
	 * @return
	 */
	public boolean passUser(int id, int operator);

	/**
	 * 用户审核未通过
	 * 
	 * @param user
	 * @return
	 */
	public boolean unPassUser(int id, int operator);

	/**
	 * 获取全部注册用户信息
	 * 
	 * @return
	 */
	public List<Map<String, Object>> GetRegisterUsers(int roleId, int status);

	/**
	 * 返回特定用户信息
	 * 
	 * @param id
	 * @return
	 */
	public List<Map<String, Object>> GetUserInfo(int id);

	/**
	 * 获取相应用户权限下的操作目录
	 * 
	 * @param user
	 * @return
	 */
	public List<Map<String, Object>> GetDir(Map<?, ?> map);

	/**
	 * 删除id为参数id值的一条用户信息
	 * 
	 * @param id
	 * @return
	 */
	public boolean DelUser(int id);
}
