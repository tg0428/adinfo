package com.cust.adinfo.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.cust.adinfo.model.ad;

@Service
public interface adinfoService extends BaseService {

	/** 提交审核广告
	 * @param ad_id	: 广告id 
	 * @return
	 */
	public boolean SubmitAd(int ad_id);
	
	/** 返回全部广告
	 * @return
	 */
	public List<Map<String,Object>> GetAllAd();
	
	/** 返回指定id用户的广告信息
	 * @param user_id
	 * @return
	 */
	public List<Map<String,Object>> GetUnipueUserAd(int user_id);
	
	/** 添加新的一条广告
	 * @param ad : 广告pojo对象
	 * @return
	 */
	public boolean AddNewAd(ad ad);
	
	/** 返回type数集
	 * @param user_id
	 * @return
	 */
	public List<Map<String,Object>> GetType();
	
	/** 修改广告
	 * @param ad
	 * @return
	 */
	public boolean ModifyAd(ad ad);
}
