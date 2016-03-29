package com.shx.book.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.shx.book.dao.baseDao;
import com.shx.book.model.User;
import com.shx.book.service.BaseService;

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
