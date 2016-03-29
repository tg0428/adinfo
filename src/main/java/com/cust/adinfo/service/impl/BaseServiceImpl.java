package com.cust.adinfo.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.cust.adinfo.dao.baseDao;
import com.cust.adinfo.model.User;
import com.cust.adinfo.service.BaseService;

@Service("BaseService")
public class BaseServiceImpl implements BaseService {

	private baseDao mBaseDao;

	@Resource(name = "baseDaoImpl")
	public void setmBaseDao(baseDao mBaseDao) {
		this.mBaseDao = mBaseDao;
	}

	public Map<String, ?> GetUser(User user) {
		return mBaseDao.get(user.getUsername());
	}

}
