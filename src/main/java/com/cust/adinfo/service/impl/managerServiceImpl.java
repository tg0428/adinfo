package com.cust.adinfo.service.impl;

import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import com.cust.adinfo.dao.adinfoDao;
import com.cust.adinfo.dao.managerDao;
import com.cust.adinfo.dao.userDao;
import com.cust.adinfo.service.managerService;

@Service("managerService")
public class managerServiceImpl extends BaseServiceImpl implements managerService {

	private managerDao mManagerDao;
	private adinfoDao mAdinfoDao;
	private userDao mUserDao;
	
	@Resource(name="adinfoDaoImpl")  
	public void setmAdinfoDao(adinfoDao mAdinfoDao) {
		this.mAdinfoDao = mAdinfoDao;
	}

	@Resource(name="userDaoImpl")  
	public void setmUserDao(userDao mUserDao) {
		this.mUserDao = mUserDao;
	}

	@Resource(name="managerDaoImpl")  
	public void setmManagerDao(managerDao mManagerDao) {
		this.mManagerDao = mManagerDao;
	}
	
	public List<Map<String, Object>> GetRegisterUsers(int roleId,int status) {
		return mManagerDao.get(roleId,status);
	}

	public List<Map<String, Object>> GetDir(Map<?,?> map) {
		return mManagerDao.getDir(Integer.valueOf(map.get("role_id").toString()));
	}

	public boolean DelUser(int id) {
		return mUserDao.delete(id);
	}

	public boolean DelAd(int id) {
		return mAdinfoDao.delete(id);
	}

	public boolean passUser(int id, int operator) {
		return mManagerDao.updateUser(id, operator, 2);
	}

	public boolean unPassUser(int id, int operator) {
		return mManagerDao.updateUser(id, operator, 3);
	}

	public boolean passAd(int id, int operator) {
		return mAdinfoDao.update(id, operator, null, 2);
	}

	public boolean unPassAd(int id, int operator, String msg) {
		return mAdinfoDao.update(id, operator, msg, 3);
	}
}
