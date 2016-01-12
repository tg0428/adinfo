package com.cust.adinfo.model;

public class result {

	private String valid;
	private String username;
	private String msg;
	private String remarks;

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getValid() {
		return valid;
	}

	public void setValid(String valid) {
		this.valid = valid;
	}
	
	private result(Builder build) {
		this.valid = build.valid;
		this.username = build.username;
		this.msg = build.msg;
		this.remarks = build.remarks;
	}
	
	public static class Builder{
		
		private String valid = null ;
		private String username = null;
		private String msg = null;
		private String remarks = null;
		
		public Builder(String valid){
			this.valid = valid;
		}
		
		public Builder username(String username){
			this.username = username;
			return this;
		}
		
		public Builder msg(String msg){
			this.msg = msg;
			return this;
		}
		
		public Builder remarks(String remarks){
			this.remarks = remarks;
			return this;
		}
		
		public result builder(){
			return new result(this);
		}
	}

}
