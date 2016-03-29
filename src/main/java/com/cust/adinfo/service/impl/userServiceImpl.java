package com.cust.adinfo.service.impl;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.cust.adinfo.dao.userDao;
import com.cust.adinfo.model.User;
import com.cust.adinfo.service.userService;
import com.cust.adinfo.utils.MD5;
import com.cust.adinfo.utils.webGetDate;

@Service("userService")
public class userServiceImpl extends BaseServiceImpl implements userService {

	private userDao mUserDao;

	private static Logger log = LoggerFactory.getLogger(userServiceImpl.class);

	@Resource(name = "userDaoImpl")
	public void setmUserDao(userDao mUserDao) {
		this.mUserDao = mUserDao;
	}

	public boolean Login(User user) {
		Map<?, ?> userMap = mUserDao.get(user.getUsername());
		log.debug("map's size is :" + (userMap == null ? "map为空" : userMap.size()));
		if (userMap != null && userMap.size() > 0) {
			return MD5.checkpassword(user.getPassword(), userMap.get("password").toString());
		} else {
			return false;
		}
	}

	public boolean Register(User user) {
		if (!checkExist(user)) {
			try {
				mUserDao.save(user.getUsername(), MD5.EncoderByMd5(user.getPassword()), user.getContactor(),
						user.getCompanyName(), user.getContact(), 2, webGetDate.getDate());
			} catch (NoSuchAlgorithmException e) {
				e.printStackTrace();
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
			return true;
		} else {
			return false;
		}
	}

	public boolean AddUser(User user) {
		if (!checkExist(user)) {
			mUserDao.save(user.getUsername(), user.getPassword(), 3);
			return true;
		} else {
			return false;
		}
	}

	public boolean DeleteUser(User user) {
		mUserDao.delete(user.getId());
		return true;
	}

	public boolean UpdateUserPassword(String oldPassword, String password, String username) {
		if (checkUpdatePassword(oldPassword, username)) {
			try {
				return mUserDao.update(username, MD5.EncoderByMd5(password));
			} catch (NoSuchAlgorithmException e) {
				e.printStackTrace();
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
			return true;
		} else {
			return false;
		}
	}

	public boolean checkExist(User user) {
		Map<?, ?> map = mUserDao.get(user.getUsername());
		if (map != null && map.size() > 0) {
			return true;
		} else {
			return false;
		}
	}

	public boolean checkUpdatePassword(String oldPassword, String username) {
		Map<?, ?> map = mUserDao.get(username);
		if (MD5.checkpassword(oldPassword, (String) map.get("password"))) {
			return true;
		} else {
			return false;
		}
	}

	public List<Map<String, Object>> GetAssister() {
		return mUserDao.getAssist();
	}

	public boolean ResetUser(int id) {
		return mUserDao.reset(id);
	}
}
