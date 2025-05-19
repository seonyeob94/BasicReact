// file: sync-select.js
const mysql = require('mysql2/promise');

async function main() {
  // 1) 커넥션 생성
  const conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'react',
    database: 'react',
    port: 3305
  });

  // 2) 쿼리 실행 (await 덕분에 순차 실행!)
  const [rows, fields] = await conn.execute(
    'SELECT e_id, e_name, gen, addr FROM emp'
  );

  console.log(rows);

  // 3) 종료
  await conn.end();
}

main().catch(console.error);
