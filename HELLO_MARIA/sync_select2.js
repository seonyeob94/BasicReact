// sync_select.js
// 꼭 mysql2/promise 여야 async/await 사용 시 에러가 없습니다.
const mysql = require('mysql2/promise');

async function run() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      port: 3305,
      user: 'root',
      password: 'react',
      database: 'react'
    });

    const [rows] = await connection.execute('SELECT * FROM emp');

    rows.forEach(row => {
      console.log(`ID: ${row.e_id}, Name: ${row.e_name}`);
    });

    await connection.end();
  } catch (err) {
    console.error('❌ 오류 발생:', err);
  }
}

run();
