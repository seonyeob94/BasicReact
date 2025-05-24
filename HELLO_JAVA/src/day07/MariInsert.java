package day07;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class MariInsert {
	public static void main(String[] args) throws Exception {
        String url = "jdbc:mysql://localhost:3305/react"; 
        String user = "root"; 
        String password = "react"; 
        
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection conn = DriverManager.getConnection(url, user, password);
        
        String sql = """
			INSERT INTO emp
				(e_id,e_name,gen,addr)
			VALUES
				('3','3','3','3')
        """; 
        Statement stmt = conn.createStatement();
        int cnt = stmt.executeUpdate(sql);
        System.out.println("cnt:"+cnt);


        stmt.close();
        conn.close();
	}
}
