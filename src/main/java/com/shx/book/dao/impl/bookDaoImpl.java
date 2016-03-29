package com.shx.book.dao.impl;

import java.util.List;
import java.util.Map;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.shx.book.dao.bookDao;
import com.shx.book.model.book;
import com.shx.book.utils.webGetDate;

@Repository(value = "bookDaoImpl")
public class bookDaoImpl extends baseDaoImpl implements bookDao {

	public boolean add(book book) {
		String sql = "insert into `dbo.book` (b_name,b_type,b_detail,b_total_amount,b_exist_amount,b_borrow_duration) values (?,?,?,?,?,?)";
		int row;
		row = getmJdbcTemplate().update(sql, book.getB_name(), book.getB_type(), book.getB_detail(),
				book.getB_total_amount(), book.getB_total_amount(), book.getB_borrow_duration());
		if (row != 0) {
			return true;
		}
		return false;
	}

	public boolean del(int id) {
		String sql = "delete from `dbo.book` where b_id=?";
		int row;
		row = getmJdbcTemplate().update(sql, id);

		if (row != 0) {
			return true;
		}
		return false;
	}

	public List<Map<String, Object>> list() {
		String sql = "select a.*, b.type_name from `dbo.book` as a left join `dbo.type` as b on a.b_type=b.type_id where 1=1";
		List<Map<String, Object>> list = getmJdbcTemplate().queryForList(sql);
		return list;
	}

	public List<Map<String, Object>> getInfo(String sql, Object[] args) {
		List<Map<String, Object>> list = getmJdbcTemplate().queryForList(sql, args);
		return list;
	}

	public boolean addType(String type_name) {
		/**
		 * 1. return false 存在相同记录 插入失败 2. return true 不存在相同类型 插入成功
		 */
		if (!checkExist(type_name)) {
			String sql = "insert into `dbo.type` (type_name) values (?) ";
			int row;
			row = getmJdbcTemplate().update(sql, type_name);
			if (row != 0) {
				return true;
			}
			return false;
		}
		return false;
	}

	public List<Map<String, Object>> getType() {
		String sql = "select a.*,COUNT(b.b_id) as num from `dbo.type` a LEFT JOIN `dbo.book` b on a.type_id = b.b_type GROUP BY a.type_id";
		try {
			return this.getmJdbcTemplate().queryForList(sql);
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		return null;
	}

	public List<Map<String, Object>> one(int b_id) {
		String sql = "select * from `dbo.book` where b_id = ?";
		List<Map<String, Object>> list = getmJdbcTemplate().queryForList(sql, b_id);
		return list;
	}

	public boolean delType(int id) {
		String sql = "delete from `dbo.type` where type_id=?";
		int row;
		row = getmJdbcTemplate().update(sql, id);

		if (row != 0) {
			return true;
		}
		return false;
	}

	public boolean upd_Pic(book book) {
		String sql = "update `dbo.book` set b_cover_url = ?,b_cover_server_url = ? where b_id = ?";
		int row;
		row = getmJdbcTemplate().update(sql, book.getB_cover_url(), book.getB_cover_server_url(), book.getB_id());
		if (row != 0) {
			return true;
		}
		return false;
	}

	public boolean destine(int id, int u_id, int days) {
		
		if (!checkIsSingleOrNot(id, u_id)){
			if (reduceBookAmount(id)){
				String sql = "insert into `dbo.user_link_book` set u_id=?,b_id=?,borrow_time=?,warning_return_time=?";
				int row;
				try {
					row = getmJdbcTemplate().update(sql, u_id, id, webGetDate.getDate(), webGetDate.addData(days));
					if (row != 0) {
						return true;
					}
				} catch (Exception e) {
					e.printStackTrace();
					return false;
				}
			}
		}
		return false;
	}

	public List<Map<String, Object>> list(int u_id) {
		String sql = "select * from `dbo.user_link_book` as a left join `dbo.book` as b on a.b_id = b.b_id left join `dbo.type` as c on b.b_type = c.type_id where a.u_id = ?";
		List<Map<String, Object>> list = getmJdbcTemplate().queryForList(sql, u_id);
		return list;
	}

	public boolean back(int id, int u_id) {
		String sql = "update `dbo.user_link_book` set status = 1,actual_return_time = ? where b_id = ? and u_id=? and status = 0";
		int row = getmJdbcTemplate().update(sql, webGetDate.getDate(), id, u_id);
		if (row != 0) {
			addBookAmount(id);
			return true;
		}
		return false;
	}

	public boolean checkExist(String type_name) {
		String sql = "select * from `dbo.type` where type_name=?";
		int row = getmJdbcTemplate().queryForList(sql, type_name).size();

		if (row != 0) {
			// 存在相同类型
			return true;
		}
		return false;
	}
	
	public boolean reduceBookAmount(int b_id){
		String sql_1 = "update `dbo.book` set b_exist_amount=? where b_id=?"; 
		int num = getBookAmount(b_id);
		if (num > 0){
			getmJdbcTemplate().update(sql_1, num-1, b_id);
			return true;
		}
		return false;
	}
	
	public int getBookAmount(int b_id){
		String sql_0 = "select b_exist_amount from `dbo.book` where b_id=?"; 
		List<Map<String,Object>> list = getmJdbcTemplate().queryForList(sql_0, b_id);
		if (list.size() > 0){
			return (Integer) list.get(0).get("b_exist_amount");
		}
		return 0;
	}
	
	public boolean addBookAmount(int b_id){
		String sql_1 = "update `dbo.book` set b_exist_amount=? where b_id=?"; 
		int num = getBookAmount(b_id);
		if (num > 0){
			getmJdbcTemplate().update(sql_1, num+1, b_id);
			return true;
		}
		return false;
	}
	
	public boolean checkIsSingleOrNot(int b_id, int u_id){
		String sql = "select * from `dbo.user_link_book` where b_id=? and u_id=? and status = 0";
		int row = getmJdbcTemplate().queryForList(sql, b_id, u_id).size();
		if (row != 0){
			return true;
		}
		return false;
	}

	public List<Map<String, Object>> getDestineUserList(int id) {
		String sql = "select name, count(b_id) as num from `dbo.user` as a left join `dbo.user_link_book` as b on a.id = b.u_id where b.b_id = ? GROUP BY a.id;";
		List<Map<String,Object>> list = getmJdbcTemplate().queryForList(sql, id);
		return list;
	}

}
