package shop.ingong.demo;



import java.util.ArrayList;

import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.annotation.PostConstruct;
import jakarta.servlet.http.HttpServletRequest;
import shop.ingong.dto.Store;

@Controller 
public class MyController {
	
	 @GetMapping("/hello")     // 2. GET / 요청이 오면 아래 메서드 실행
	    public String hello() {
	        return "Hello, World!";
	    }
	 
	 @GetMapping("/welcome")               // 루트로 접근했을 때
	 public String welcome(Model model ) {
		 
		String a = "홍길동";
		String[] b = {"전우치","이순신"};
		ArrayList<Store> c = new ArrayList();
		c.add(new Store("1", "1"));
		c.add(new Store("2", "2"));
		
		
		model.addAttribute("a", a);
	    model.addAttribute("b", b);
	    model.addAttribute("c", c);
	    
		 return "welcome";  
		 
	 
	 }
	 @GetMapping("/param")               // 루트로 접근했을 때
	 public String param(@RequestParam String menu,	Store st, HttpServletRequest req, Model model ) {
		 
		 System.out.println("menu"+ menu);
		 System.out.println("st"+ st);
		 System.out.println("req"+ req.getParameter("menu"));
		 
		 return "param";  
		 
	 }
	 @PostMapping("/post")               // 루트로 접근했을 때
	 public String post(@RequestParam String menu, Store st, HttpServletRequest req, Model model ) {
		 
		 System.out.println("menu"+ menu);
		 System.out.println("st"+ st);
		 System.out.println("req"+ req.getParameter("menu"));
		 return "post";  
		 
	 }
	 	
}
