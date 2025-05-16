const express = require('express');
const mysql = require('mysql2');



const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'react',
    database: 'react',
    port : 3305
});

conn.connect();


var sql =`
	select 
	 e_id,e_name,gen,addr
	 from emp
`;

conn.query(sql, function(err,rows, fields){
	
	console.log("rows",rows)
});


conn.end();

