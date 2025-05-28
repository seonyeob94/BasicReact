package shop.ingong.myba;

import java.util.ArrayList;

public class DaoMemTest {
	public static void main(String[] args) {
		DaoMem de = new DaoMem();
		MemVO pvo = new MemVO("5","","","");
	
		
       
		
		 int delete = de.delete(pvo);
	     System.out.println(delete);
        
        ArrayList<MemVO> list = de.selectList();
        for (MemVO vo : list) {
			System.out.println(vo);
		}	
        
	}

}
