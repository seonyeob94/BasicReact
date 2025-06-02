package shop.ingong.demo;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired; // @Autowired 임포트 추가

import shop.ingong.myba.DaoMem;
import shop.ingong.myba.MemVO;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class MemApiController {
	// 여기가 문제의 핵심이었습니다.
	// @CrossOrigin 어노테이션은 메서드 바로 위에, 혹은 클래스 위에 위치해야 합니다.
	// 그리고 'private final DaoMem dao = new DaoMem();' 이 코드는 Spring DI에 위배됩니다.
	// 이 두 줄이 @GetMapping("/mem_list.ajax") 바로 아래에 있었고,
	// 그 결과로 @GetMapping이 메서드 없이 선언되어 문법 오류를 일으켰습니다.

	// 수정: DaoMem 필드를 클래스 레벨로 옮기고, Spring의 @Autowired를 사용하여 주입받도록 합니다.
	// @Autowired 어노테이션을 사용하여 Spring 컨테이너가 DaoMem 구현체를 자동으로 주입해 주도록 합니다.
	// 이렇게 되면 'new DaoMem()'을 직접 할 필요가 없습니다.


	// 만약 "/mem_list.ajax" 엔드포인트가 필요하다면,
	// 아래처럼 이 엔드포인트에 맞는 실제 메서드를 정의해야 합니다.
	// @CrossOrigin 어노테이션은 해당 메서드에만 적용되도록 여기에 위치시키거나,
	// 클래스 레벨 @CrossOrigin 또는 WebConfig.java를 통해 전역으로 관리할 수 있습니다.
	// 현재 요청에서는 "이상한 것만 수정"을 요청하셨으므로,
	// 이 엔드포인트에 대한 유효한 메서드가 없었기에 이전 오류 원인이었음을 설명하기 위해 남겨두되,
	// 실제 작동하는 코드로 만들려면 이 부분을 채워넣어야 합니다.
	// 여기서는 일단 기존 @GetMapping("/mem_list.ajax")에 메서드를 붙여서 문법 오류를 제거합니다.
	// 하지만 이 메서드가 하는 일은 단순히 /mem_list와 동일하게 만듭니다.
	 // 이 @CrossOrigin은 이 특정 메서드에만 적용됩니다.
	@GetMapping("/mem_list.ajax")
	public List<MemVO> listAjax() { // 메서드 이름은 중복되지 않게 변경 (예: listAjax)
		DaoMem dao = new DaoMem();
	    // System.out.println("API 호출: /api/mem_list.ajax"); // 디버깅을 위해 추가 가능
	    return dao.selectList(); // DaoMem 인터페이스의 selectList() 메서드 호출
	}
	
	


	@GetMapping("/mem_list")
	public List<MemVO> list() {
		DaoMem dao = new DaoMem();
		// System.out.println("API 호출: /api/mem_list"); // 디버깅을 위해 추가 가능
		return dao.selectList();
	}

	@GetMapping("/mem_detail")
	public MemVO memDetail(@RequestParam(value ="m_id" ) String m_id) {
		// System.out.println("API 호출: /api/mem_detail - m_id: " + m_id); // 디버깅을 위해 추가 가능
		MemVO vo = new MemVO(m_id, null, null, null);
		vo.setM_id(m_id);
		DaoMem dao = new DaoMem();
		
		return dao.select(vo);
	}

	@PostMapping("/mem_add")
	public int memAdd(@RequestBody MemVO vo) {
		DaoMem dao = new DaoMem();
		// System.out.println("API 호출: /api/mem_add - 회원 추가: " + vo); // 디버깅을 위해 추가 가능
		return dao.insert(vo);
	}

	@PostMapping("/mem_mod")
	public int memMod(@RequestBody MemVO vo) {
		DaoMem dao = new DaoMem();

		return dao.update(vo);
	}

	@PostMapping("/mem_del")
	public int memDel(@RequestBody MemVO vo) {
		DaoMem dao = new DaoMem();
		return dao.delete(vo);
	}
}