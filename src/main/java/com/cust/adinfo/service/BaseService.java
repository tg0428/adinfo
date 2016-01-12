package com.cust.adinfo.service;

import java.util.Map;
import org.springframework.stereotype.Service;
import com.cust.adinfo.model.User;

@Service
public interface BaseService {

	/** 根据session中的user对象
	 * @param user
	 * @return
	 */
	public Map<String,?> GetUser(User user);
}
