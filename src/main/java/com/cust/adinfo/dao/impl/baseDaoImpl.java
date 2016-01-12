package com.cust.adinfo.dao.impl;

import java.util.Map;
import javax.annotation.Resource;
import javax.sql.DataSource;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import com.cust.adinfo.dao.baseDao;
import com.cust.adinfo.utils.MD5;
import com.cust.adinfo.utils.webGetDate;

/**
 * @author guoyidong
 * 
 */
@Repository(value = "baseDaoImpl")
public class baseDaoImpl implements baseDao {

	private JdbcTemplate mJdbcTemplate;

	@Resource
	public void setDataSource(DataSource dataSource) {
		this.mJdbcTemplate = new JdbcTemplate(dataSource);
	}

	public JdbcTemplate getmJdbcTemplate() {
		return mJdbcTemplate;
	}

	public boolean save(String username, String password, String contactor, String companyName, String contact,
			int roleId, String register_time) {
		String sql = "insert into `dbo.user` (name, company_name,password,contactor, contact,role_id,register_time) values (?,?,?,?,?,?,?)";
		try {
			this.getmJdbcTemplate().update(sql, username, companyName, password, contactor, contact, roleId,
					register_time);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}


	public boolean update(String username, String password) {
		String sql = "update `dbo.user` set password=? where name=?";
		try {
			this.getmJdbcTemplate().update(sql, password, username);
		} catch (DataAccessException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	public Map<String, ?> get(String username) {
		String sql = "select * from `dbo.user` as a left join `dbo.status` as b on a.status = b.status_id where name=?";
		try {
			return this.getmJdbcTemplate().queryForMap(sql, username);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public boolean save(String username, String password, int roleId) {
		String sql = "insert into `dbo.user` set name=?,password=?,role_id=?,contact='000000000',contactor='admin001',company_name='长春理工大学',status=2,register_time=?";
		try {
			this.getmJdbcTemplate().update(sql, username, MD5.EncoderByMd5(password), roleId,webGetDate.getDate());
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

}
