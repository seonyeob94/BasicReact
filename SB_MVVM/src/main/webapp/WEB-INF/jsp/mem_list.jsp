<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript">
function fn_add(){
	location.href = "mem_add.do"
}
</script>
</head>
<body>
	<h1>MEM LIST</h1>
	<table border="1">
		<thead>
			<tr>
				<th>사원ID</th>
				<th>이름</th>
				<th>전화번호</th>
				<th>이메일</th>
			</tr>
		</thead>
		<tbody>
		  <c:forEach var="mem" items="${mems}">
		    <tr>
		      <td><a href="mem_detail.do?e_id=${mem.m_id}">${mem.m_id}</a></td>
		      <td>${mem.m_name}</td>
		      <td>${mem.tel}</td>
		      <td>${mem.email}</td>
		    </tr>
		  </c:forEach>
		</tbody>
	</table>
	<button onclick="fn_add()">추가</button>
</body>
</html>