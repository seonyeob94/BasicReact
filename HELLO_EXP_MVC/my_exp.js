const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const app        = express();
const port       = 3000;

const mysql = require('mysql2/promise');

// (app.js 최상단에 추가)
const pool = mysql.createPool({
  host: 'localhost',
  port: 3305,       // MariaDB 포트
  user: 'root',     // DB 유저
  password: 'react',// 비밀번호
  database: 'react',// 사용 DB
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ① .html 을 EJS 엔진으로 렌더링하도록 등록
app.engine('html', require('ejs').renderFile);
// ② 뷰 엔진의 기본 확장자를 html 로 설정
app.set('view engine', 'html');
// ③ views 폴더 위치 지정 (기본이 views 이므로 생략해도 되지만 명시해 두면 헷갈리지 않습니다)
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello ChaEunWoo');
});



app.get('/emp_list.do', async (req, res, next) => {
  try {
    // emp 테이블 전체 조회
    const [rows] = await pool.query('SELECT * FROM emp');
    // 조회된 배열을 emps 키로 뷰에 넘겨 줌
    res.render('emp_list', { emps: rows });
  } catch (err) {
    next(err);
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
