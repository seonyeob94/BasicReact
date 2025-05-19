// file: sync-delete.js
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

    const sql = `
      DELETE FROM emp
      WHERE e_id = '3'
    `;
    // 파라미터가 없으므로 execute(sql) 만!
    const [result] = await conn.execute(sql);

    console.log('DELETE 성공! 영향을 받은 행 수:', result.affectedRows);

  } catch (err) {
    console.error('❌ DELETE 중 오류 발생:', err);
  } finally {
    if (conn) await conn.end();
  }
}

main();
