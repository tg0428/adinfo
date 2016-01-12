package com.cust.adinfo.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.cust.adinfo.model.User;

/**
 * @author guoyidong
 *用于处理用户登录，注册，更新，删除，管理员添加辅助用户操作
 */
@Service
public interface userService extends BaseService{

	/**用户登录方法，登录成功返回true，失败返回false
	 * @param user
	 * @return
	 */
	public boolean Login(User user);

	/**用户注册方法，注册成功返回true，失败返回false
	 * @param user
	 * @return
	 */
	public boolean Register(User user);

	/**管理员添加辅助用户方法
	 * @param user
	 * @return
	 */
	public boolean AddUser(User user);

	/**删除用户方法
	 * @param user
	 * @return
	 */
	public boolean DeleteUser(User user);

	/**更新用户方法
	 * @param password
	 * @param username
	 * @return
	 */
	public boolean UpdateUserPassword(String oldPassword, String password, String username);
	
	/** 获取辅助管理员列表
	 * @return
	 */
	public List<Map<String,Object>> GetAssister();
	
	
	/** 重置用户密码
	 * @param id
	 * @return
	 */
	public boolean ResetUser(int id);
	

}
