package shop.ingong.demo;

import java.io.IOException;
import java.io.PrintWriter;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import jakarta.servlet.http.HttpServletResponse;

@Controller
public class MyController {

	@GetMapping("/")
	public ModelAndView index(HttpServletResponse resp) throws IOException {
		RedirectView rv = new RedirectView("/mem.html");
		return new ModelAndView(rv);
	}

//	@GetMapping("/thymeleaf") 
//	public String thymeleaf(HttpServletResponse resp) throws IOException {
//		return "thymeleaf";
//	}

	@GetMapping("/java")
	public String java(HttpServletResponse resp) throws IOException {
		return "java";
	}

}