package day07;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class MariSelect {
	public static void main(String[] args) throws Exception {
        String url = "jdbc:mysql://localhost:3305/react"; 
        String user = "root"; 
        String password = "react"; 
        
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection conn = DriverManager.getConnection(url, user, password);
        
        String sql = """
        		SELECT * FROM emp
        """; 
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery(sql);
        
        while (rs.next()) {
            String e_id = rs.getString("e_id");
            System.out.println("e_id" + e_id);
        }
        rs.close();
        stmt.close();
        conn.close();
	}
}
