package com.shx.book.service;

import java.util.Map;
import org.springframework.stereotype.Service;

import com.shx.book.model.User;

@Service
public interface BaseService {

	/** 根据session中的user对象
	 * @param user
	 * @return
	 */
	public Map<String,?> GetUser(User user);
}
