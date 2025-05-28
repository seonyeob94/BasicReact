package shop.ingong.myba;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

public class DaoMem {
	SqlSessionFactory sqlMapper = SqlSessionFactoryManager.getSqlSessionFactory();

	public ArrayList<MemVO> selectList() {
		return (ArrayList) sqlMapper.openSession().selectList("mem.selectList");
	}
	
	public MemVO select(MemVO vo) {
		 return sqlMapper.openSession().selectOne("mem.select",vo);
	}
	
	public int insert(MemVO vo) {
		SqlSession session = sqlMapper.openSession();
		int cnt = session.update("mem.insert",vo);
		session.commit();
		session.close();
		return cnt;
	}
	
	public int update(MemVO vo) {
		return sqlMapper.openSession(true).update("mem.update",vo);
	}	
	
	public int delete(MemVO vo) {
		return sqlMapper.openSession(true).update("mem.delete",vo);
	}	
	
	public int getNextId() {
		return sqlMapper.openSession(true).selectOne("mem.getNextId");
	}
	

}
