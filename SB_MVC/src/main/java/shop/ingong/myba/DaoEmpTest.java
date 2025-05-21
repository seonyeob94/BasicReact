package shop.ingong.myba;

import java.util.ArrayList;

public class DaoEmpTest {
	public static void main(String[] args) {
		DaoEmp de = new DaoEmp();
		EmpVO pvo = new EmpVO("5","","","");
		
		
       
		
		 int delete = de.delete(pvo);
	     System.out.println(delete);
        
        ArrayList<EmpVO> list = de.selectList();
        for (EmpVO vo : list) {
			System.out.println(vo);
		}	
        
	}

}
