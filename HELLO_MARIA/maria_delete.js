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
	
DELETE FROM emp
WHERE e_id=?
`;

const values = ['3'];


// SQL 실행
conn.query(sql, values, function(err, result) {
    if (err) {
        console.error('DELETE 오류:', err);
        return;
    }
    console.log('DLETE 성공! ');
});