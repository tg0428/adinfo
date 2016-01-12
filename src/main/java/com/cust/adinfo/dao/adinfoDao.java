package com.cust.adinfo.dao;

import java.util.List;
import java.util.Map;

/**
 * @author guoyidong 针对dbo.ad表的增删改查操作
 */
public interface adinfoDao extends baseDao {

	/** 更新广告状态
	 * @param ad_id
	 * @param judge_id
	 * @param msg
	 * @param status
	 * @return
	 */
	public boolean update(int ad_id, int judge_id, String msg, int status);

	/**
	 * 获取全部广告列表
	 * 
	 * @return
	 */
	public List<Map<String, Object>> getAll();

	/**
	 * 获取指定用户广告列表
	 * 
	 * @param userId
	 * @return
	 */
	public List<Map<String, Object>> getFromUniqueUser(int userId);

	/**
	 * 更新指定广告相关内容
	 * 
	 * @param ad_id
	 *            : 广告Id
	 * @param ad_name
	 *            : 广告标题
	 * @param type
	 *            ： 广告类型
	 * @param detail
	 *            ： 广告详情
	 * @return
	 */
	public boolean update(int ad_id, String ad_name, int type, String detail);

	/**
	 * 插入一条广告
	 * 
	 * @param user_id
	 * @param ad_id
	 * @param ad_name
	 * @param type
	 * @param detail
	 * @param status
	 * @return
	 */
	public boolean save(int user_id, String ad_name, int type, String detail, int status);

	/**
	 * 根据id删除广告信息
	 * 
	 * @param id
	 *            : id
	 * @return
	 */
	public boolean delete(int id);
	

	/** 获取广告类型
	 * @return 
	 */
	public List<Map<String,Object>> getType();
}
