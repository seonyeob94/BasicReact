package shop.ingong.myba;

import java.util.ArrayList;

public class DaoMemTest {
	public static void main(String[] args) {
		DaoMem de = new DaoMem();
		int cnt = de.delete(new MemVO("3","6","6","6"));
		System.out.println(cnt);
		
		
	}
}
