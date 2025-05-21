package shop.ingong.dto;

import lombok.Data;

@Data
public class Store {
	private String menu = "";
	private String price = "";
	
	public Store(String menu, String price) {
		this.menu = menu;
		this.price = price;
	}
}
