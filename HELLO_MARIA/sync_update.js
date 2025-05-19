// file: sync-update.js
const mysql = require('mysql2/promise');

async function main() {
  let conn;
  try {
    conn = await mysql.createConnection({
      host: 'localhost',
      port: 3305,
      user: 'root',
      password: 'react',
      database: 'react'
    });

    // 백틱을 이용한 멀티라인 UPDATE
    const sql = `
      UPDATE emp
      SET e_name = ?,
          gen    = ?,
          addr   = ?
      WHERE e_id   = ?
    `;
    const params = ['6', '6', '6', '3'];

    // execute() 로 DML 실행
    const [result] = await conn.execute(sql, params);

    console.log('UPDATE 성공! 영향받은 행 수:', result.affectedRows);
    // UPDATE 에는 insertId 가 없으니, affectedRows 만 보시면 됩니다.

  } catch (err) {
    console.error('❌ UPDATE 중 오류 발생:', err);
  } finally {
    if (conn) await conn.end();
  }
}

main();
