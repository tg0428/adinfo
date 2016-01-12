package com.cust.adinfo.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.cust.adinfo.dao.adinfoDao;
import com.cust.adinfo.model.ad;
import com.cust.adinfo.service.adinfoService;

@Service("adinfoService")
public class adinfoServiceImpl extends BaseServiceImpl implements adinfoService {


	private adinfoDao mAdinfoDao;
	
	@Resource(name="adinfoDaoImpl")
	public void setmAdinfoDao(adinfoDao mAdinfoDao) {
		this.mAdinfoDao = mAdinfoDao;
	}

	public boolean SubmitAd(int ad_id) {
		return mAdinfoDao.update(ad_id, 0, null, 1);
	}

	public List<Map<String, Object>> GetAllAd() {
		return mAdinfoDao.getAll();
	}

	public List<Map<String, Object>> GetUnipueUserAd(int user_id) {
		return mAdinfoDao.getFromUniqueUser(user_id);
	}
	
	public boolean AddNewAd(ad ad){
		return mAdinfoDao.save(ad.getUserId(), ad.getAdName(), ad.getType(), ad.getDetail(), ad.getStatus());
	}
	
	public List<Map<String, Object>> GetType() {
		return mAdinfoDao.getType();
	}

	public boolean ModifyAd(ad ad) {
		return mAdinfoDao.update(ad.getAdId(), ad.getAdName(), ad.getType(), ad.getDetail());
	}

}
