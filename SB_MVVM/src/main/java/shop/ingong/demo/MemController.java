package shop.ingong.demo;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import jakarta.servlet.http.HttpServletResponse;
import shop.ingong.myba.DaoMem;
import shop.ingong.myba.MemVO;
@Controller
public class MemController {
	
	
	
	
	@GetMapping("/")
	public ModelAndView index(HttpServletResponse resp) throws IOException {
		RedirectView rw = new RedirectView("/mem.html");
		
		return new ModelAndView(rw);
		
	}
	
	

	/*
	 * @GetMapping("/thymeleaf") public String thymeleaf(HttpServletResponse resp)
	 * throws IOException {
	 * 
	 * 
	 * return "thymeleaf";
	 * 
	 * }
	 */
	@GetMapping("/java")
	public String java(HttpServletResponse resp) throws IOException {
		
		
		return "java";
		
	}
	
	
	@GetMapping("/index")
	public String index(Model model) {
	    model.addAttribute("message", "HELLO JANG WONYOUNG22");
	    
	    return "emp_list";    // → templates/emp_list.html
	}
	
	
}
