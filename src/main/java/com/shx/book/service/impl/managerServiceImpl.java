package com.shx.book.service.impl;

import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

import com.shx.book.dao.managerDao;
import com.shx.book.dao.userDao;
import com.shx.book.service.managerService;

@Service("managerService")
public class managerServiceImpl extends BaseServiceImpl implements managerService {

	private managerDao mManagerDao;
	private userDao mUserDao;

	@Resource(name = "userDaoImpl")
	public void setmUserDao(userDao mUserDao) {
		this.mUserDao = mUserDao;
	}

	@Resource(name = "managerDaoImpl")
	public void setmManagerDao(managerDao mManagerDao) {
		this.mManagerDao = mManagerDao;
	}

	public List<Map<String, Object>> GetRegisterUsers(int roleId, int status) {
		return mManagerDao.get(roleId, status);
	}

	public List<Map<String, Object>> GetDir(Map<?, ?> map) {
		return mManagerDao.getDir(Integer.valueOf(map.get("role_id").toString()));
	}

	public boolean DelUser(int id) {
		return mUserDao.delete(id);
	}

	public boolean passUser(int id, int operator) {
		return mManagerDao.updateUser(id, operator, 2);
	}

	public boolean unPassUser(int id, int operator) {
		return mManagerDao.updateUser(id, operator, 3);
	}

	public List<Map<String, Object>> GetUserInfo(int id) {
		return mManagerDao.get(id);
	}
}
