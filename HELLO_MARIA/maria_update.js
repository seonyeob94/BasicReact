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
	
UPDATE emp
SET e_name=?,
    gen=?,
    addr=?
WHERE e_id=?
`;

// 파라미터로 들어갈 값 설정
const values = ['6', '6', '6', '3'];

// SQL 실행
conn.query(sql, values, function(err, result) {
    if (err) {
        console.error('UPDATE 오류:', err);
        return;
    }
    console.log('UPDATE 성공! ');
});