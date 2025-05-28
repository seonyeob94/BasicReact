package shop.ingong.demo;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import shop.ingong.myba.DaoMem;
import shop.ingong.myba.MemVO;

@RestController
@RequestMapping("/api")
public class MemApiController {
	private final DaoMem dao = new DaoMem();

	@GetMapping("/mem_list")
	public List<MemVO> list() {

		return dao.selectList();
	}

	@GetMapping("/mem_detail")
	public MemVO memDetail(@RequestParam String m_id) {
		MemVO vo = new MemVO(m_id, null, null, null);
		vo.setM_id(m_id);

		return dao.select(vo);
	}

	@PostMapping("/mem_add")
	public int memAdd(@RequestBody MemVO vo) {

		return dao.insert(vo);
	}

	@PostMapping("/mem_mod")
	public int memMod(@RequestBody MemVO vo) {

		return dao.update(vo);
	}

	@PostMapping("/mem_del")
	public int memDel(@RequestBody MemVO vo) {

		return dao.delete(vo);
	}
}
