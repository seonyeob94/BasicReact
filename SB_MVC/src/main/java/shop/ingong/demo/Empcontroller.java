package shop.ingong.demo;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import shop.ingong.dto.Store;
import shop.ingong.myba.DaoEmp;
import shop.ingong.myba.EmpVO;

@Controller
public class Empcontroller {
	 @GetMapping("/emp_list.do")               // 루트로 접근했을 때
	 public String do_emp_list(Model model ) {
		 DaoEmp de = new DaoEmp();
		 ArrayList<EmpVO> list = de.selectList();
		
		 model.addAttribute("emps", list);
		 
		 return "emp_list";  
		 
	 
	 }
	 @GetMapping("/emp_detail.do")               // 루트로 접근했을 때
	 public String do_emp_detail(@RequestParam("e_id") String eId,
			 Model model) {
		 	DaoEmp de = new DaoEmp();
		    // EmpVO 에는 AllArgsConstructor 만 있으니, id만 채워서
		    EmpVO vo = new EmpVO(eId, "", "", "");
		    System.out.println(vo);
		    EmpVO detail = de.select(vo);      // ② 한 건만 조회
		    model.addAttribute("detail", detail); 
	
		    return "emp_detail";
		 
	 }
	 
	 @GetMapping("/emp_nod.do")
	 public String do_emp_mod(@RequestParam("e_id") String eId, Model model) {
		 	
		 DaoEmp de = new DaoEmp();
		    // EmpVO 에는 AllArgsConstructor 만 있으니, id만 채워서
		    EmpVO vo = new EmpVO(eId, "", "", "");
		    EmpVO nod = de.select(vo);      // ② 한 건만 조회
		    model.addAttribute("nod", nod); 
		    
		 return "emp_nod";
	 }
	 
	 @PostMapping("/emp_nod_act.do")
	 public String do_emp_mod_act(@RequestParam("e_id") String eId,
			    	@RequestParam("e_name") String eName,
			    	@RequestParam("gen")   String gen,
			    	@RequestParam("addr")  String addr,
			    	Model model) {
		 DaoEmp de = new DaoEmp();
		 EmpVO vo= new EmpVO(eId, eName, gen, addr);
		 int cnt = de.update(vo);
		 
		 model.addAttribute("cnt", cnt); 
	     return "emp_nod_act";
	 }
	 @GetMapping("/emp_add.do")
	 public String do_emp_act(Model model) {
		 	
		 DaoEmp de = new DaoEmp();
		    // EmpVO 에는 AllArgsConstructor 만 있으니, id만 채워서
		
		    int nextId = de.getNextId();     // ② 한 건만 조회
		    model.addAttribute("add", nextId); 
		    
		 return "emp_add";
	 }
	 @PostMapping("/emp_add_act.do")
	 public String do_emp_add_act(@RequestParam("e_id") String eId,
			    	@RequestParam("e_name") String eName,
			    	@RequestParam("gen")   String gen,
			    	@RequestParam("addr")  String addr,
			    	Model model) {
		 DaoEmp de = new DaoEmp();
		 EmpVO vo= new EmpVO(eId, eName, gen, addr);
		 int act = de.insert(vo);
		 
		 model.addAttribute("act", act); 
	     return "emp_add_act";
	 }
	 @GetMapping("/emp_del_act.do")
	 public String do_emp_del_act_mod(@RequestParam("e_id") String eId, Model model) {
		 
		 DaoEmp de = new DaoEmp();
		 // EmpVO 에는 AllArgsConstructor 만 있으니, id만 채워서
		 EmpVO vo = new EmpVO(eId, "", "", "");
		 int del = de.delete(vo);      // ② 한 건만 조회
		 model.addAttribute("del", del); 
		 
		 return "emp_del_act";
	 }
}
