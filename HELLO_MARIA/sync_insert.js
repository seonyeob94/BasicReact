// file: sync-insert.js
const mysql = require('mysql2/promise');

async function main() {
  let conn;
  try {
    // 1) 커넥션 생성
    conn = await mysql.createConnection({
      host: 'localhost',
      port: 3305,
      user: 'root',
      password: 'react',
      database: 'react'
    });

    // 2) INSERT 쿼리 실행
    //    ? 플레이스홀더를 사용해 값을 배열로 바인딩
    const [result] = await conn.execute(
      'INSERT INTO emp (e_id, e_name, gen, addr) VALUES (?,?, ?, ?)',
      ['3', '3', '3', '3']
    );

    // 3) 결과 확인
    console.log('INSERT 성공!', result.affectedRows);
    console.log('생성된 PK:', result.insertId);

  } catch (err) {
    console.error('❌ INSERT 중 오류 발생:', err);
  } finally {
    // 4) 연결 종료
    if (conn) await conn.end();
  }
}

main();
