package com.shx.book.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.shx.book.dao.managerDao;

@Repository(value = "managerDaoImpl")
public class managerDaoImpl extends baseDaoImpl implements managerDao {

	public List<Map<String, Object>> get(int roleId, int status) {
		String sql = "select * from `dbo.user` as a left join `dbo.status` as b on a.status = b.status_id where role_id=? and status=?";
		try {
			return this.getmJdbcTemplate().queryForList(sql, roleId, status);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public List<Map<String, Object>> getDir(int roleId) {
		String sql = "select A.* from `dbo.menu_dir` as A left join `dbo.role_link_menu` as B on A.menu_id = B.role_menu_id where B.role_id = ? ";
		try {
			return this.getmJdbcTemplate().queryForList(sql, roleId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public boolean updateUser(int id, int operator, int status) {
		String sql = "update `dbo.user` set operator=?,status=? where id=?";
		try {
			this.getmJdbcTemplate().update(sql, operator, status, id);
		} catch (DataAccessException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	public boolean updateAd(int id, int judge_id, int status) {
		String sql = "update `dbo.ad` set judge_id=?,status=? where ad_id=?";
		try {
			this.getmJdbcTemplate().update(sql, judge_id, status, id);
		} catch (DataAccessException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	public List<Map<String, Object>> get(int id) {
		String sql = "select a.*, d.b_name, c.* from `dbo.user` as a left join `dbo.status` as b on a.status = b.status_id LEFT JOIN `dbo.user_link_book` as c on a.id = c.u_id LEFT JOIN `dbo.book` as d on c.b_id = d.b_id where a.id =  ?";
		try {
			return this.getmJdbcTemplate().queryForList(sql, id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}
