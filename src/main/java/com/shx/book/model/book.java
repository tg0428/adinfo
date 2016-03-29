package com.shx.book.model;

public class book {

	private int b_borrow_duration;
	private String b_cover_server_url;
	private String b_cover_url;
	private String b_detail;
	private int b_exist_amount;
	private int b_id;
	private String b_name;
	private int b_total_amount;
	private int b_type;
	public int getB_borrow_duration() {
		return b_borrow_duration;
	}
	public String getB_cover_server_url() {
		return b_cover_server_url;
	}

	public String getB_cover_url() {
		return b_cover_url;
	}

	public String getB_detail() {
		return b_detail;
	}

	public int getB_exist_amount() {
		return b_exist_amount;
	}

	public int getB_id() {
		return b_id;
	}

	public String getB_name() {
		return b_name;
	}

	public int getB_total_amount() {
		return b_total_amount;
	}

	public int getB_type() {
		return b_type;
	}

	public void setB_borrow_duration(int b_borrow_duration) {
		this.b_borrow_duration = b_borrow_duration;
	}

	public void setB_cover_server_url(String b_cover_server_url) {
		this.b_cover_server_url = b_cover_server_url;
	}

	public void setB_cover_url(String b_cover_url) {
		this.b_cover_url = b_cover_url;
	}

	public void setB_detail(String b_detail) {
		this.b_detail = b_detail;
	}

	public void setB_exist_amount(int b_exist_amount) {
		this.b_exist_amount = b_exist_amount;
	}

	public void setB_id(int b_id) {
		this.b_id = b_id;
	}

	public void setB_name(String b_name) {
		this.b_name = b_name;
	}

	public void setB_total_amount(int b_total_amount) {
		this.b_total_amount = b_total_amount;
	}

	public void setB_type(int b_type) {
		this.b_type = b_type;
	}

}
