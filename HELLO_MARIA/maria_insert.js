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
	
INSERT INTO emp(e_id,e_name,gen,addr) VALUES(?,?,?,?)
`;

// 파라미터로 들어갈 값 설정
const values = ['3', '3', '3', '3'];

// SQL 실행
conn.query(sql, values, function(err, result) {
    if (err) {
        console.error('INSERT 오류:', err);
        return;
    }
    console.log('INSERT 성공!');
});