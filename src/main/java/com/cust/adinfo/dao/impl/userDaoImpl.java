package com.cust.adinfo.dao.impl;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;
import com.cust.adinfo.dao.userDao;
import com.cust.adinfo.utils.MD5;

@Repository(value = "userDaoImpl")
public class userDaoImpl extends baseDaoImpl implements userDao {

	public boolean delete(int id) {
		String sql = "delete from `dbo.user` where id=?";
		try {
			this.getmJdbcTemplate().update(sql, id);
		} catch (DataAccessException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	public List<Map<String, Object>> getAssist() {
		String sql = "select a.*, b.status_name from `dbo.user` as a left join `dbo.status` as b on a.status = b.status_id where role_id = 3";
		try {
			return this.getmJdbcTemplate().queryForList(sql);
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		return null;
	}

	public boolean reset(int id) {
		String sql = "update `dbo.user` set password=? where id=?";
		try {
			this.getmJdbcTemplate().update(sql, MD5.EncoderByMd5("000000"), id);
		} catch (DataAccessException e) {
			e.printStackTrace();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return true;
	}
}
