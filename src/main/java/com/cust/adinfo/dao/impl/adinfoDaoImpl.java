package com.cust.adinfo.dao.impl;

import java.util.List;
import java.util.Map;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;
import com.cust.adinfo.dao.adinfoDao;
import com.cust.adinfo.utils.webGetDate;

@Repository(value = "adinfoDaoImpl")
public class adinfoDaoImpl extends baseDaoImpl implements adinfoDao {

	public boolean update(int ad_id, int judge_id, String msg, int status) {
		String sql = "update `dbo.ad` set judge_id=?,msg=?,status=? where ad_id=?";
		try {
			this.getmJdbcTemplate().update(sql,judge_id,msg,status,ad_id);
		} catch (DataAccessException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	public List<Map<String, Object>> getAll() {
		String sql = "select a.*,b.`name`,c.status_name,d.type_name,e.company_name,e.contact,e.contactor from `dbo.ad` as a left join `dbo.user` as b on a.judge_id = b.id  LEFT JOIN `dbo.status` as c on a.`status` = c.status_id LEFT JOIN `dbo.type` as d on a.type = d.type_id LEFT JOIN `dbo.user` as e on a.user_id = e.id where a.status <> 0";
		try {
			return this.getmJdbcTemplate().queryForList(sql);
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		return null;
	}

	public boolean update(int ad_id, String ad_name, int type, String detail) {
		String sql = "update `dbo.ad` set ad_name=?,type=?,detail=?,lately_modify=? where ad_id = ?";
		try {
			this.getmJdbcTemplate().update(sql,ad_name,type,detail,webGetDate.getDate(),ad_id);
		} catch (DataAccessException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	public boolean save(int user_id, String ad_name, int type, String detail, int status) {
		String sql = "insert into  `dbo.ad` (user_id,ad_name,type,detail,status,lately_modify) values (?,?,?,?,?,?)";
		try {
			this.getmJdbcTemplate().update(sql,user_id,ad_name,type,detail,status,webGetDate.getDate());
		} catch (DataAccessException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}
	
	public List<Map<String, Object>> getFromUniqueUser(int userId) {
		String sql = "select a.*,b.`name`,c.status_name,d.type_name from `dbo.ad` as a left join `dbo.user` as b on a.judge_id = b.id LEFT JOIN `dbo.status` as c on a.`status` = c.status_id LEFT JOIN `dbo.type` as d on a.type = d.type_id where a.user_id =?";
		try {
			return this.getmJdbcTemplate().queryForList(sql, userId);
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		return null;
	}

	public boolean delete(int id) {
		String sql = "delete from `dbo.ad` where ad_id=?";
		try {
			this.getmJdbcTemplate().update(sql,id);
		} catch (DataAccessException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	public List<Map<String, Object>> getType() {
		String sql = "select * from `dbo.type`";
		try {
			return this.getmJdbcTemplate().queryForList(sql);
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		return null;
	}
}
