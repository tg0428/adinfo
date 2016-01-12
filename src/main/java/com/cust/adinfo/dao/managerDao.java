package com.cust.adinfo.dao;

import java.util.List;
import java.util.Map;

public interface managerDao extends baseDao {

	/** 获取对应角色，对应状态的注册用户列表
	 * @param roleId
	 * @return
	 */
	public List<Map<String, Object>> get(int roleId,int status);
	
	/** 获取对应角色的相应dir
	 * @param roleId
	 * @return
	 */
	public List<Map<String,Object>> getDir(int roleId);
	
	/** 更新用户状态
	 * @param id
	 *            : 用户id
	 * @param operator
	 *            : 审核人
	 * @param status
	 *            : 审核状态
	 */
	public boolean updateUser(int id, int operator, int status);
	
	
	/** 更新广告状态
	 * @param id
	 *            : 用户id
	 * @param operator
	 *            : 审核人
	 * @param status
	 *            : 审核状态
	 */
	public boolean updateAd(int id, int judge_id, int status);
}
