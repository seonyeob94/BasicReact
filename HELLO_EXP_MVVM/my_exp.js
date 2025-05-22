const mysql = require('sync-mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const DaoEmp = require('./daoemp');



const de = new DaoEmp();
const app = express();
const port = 3000;




// ① .html 을 EJS 엔진으로 렌더링하도록 등록
app.engine('html', require('ejs').renderFile);
// ② 뷰 엔진의 기본 확장자를 html 로 설정
app.set('view engine', 'html');
// ③ views 폴더 위치 지정 (기본이 views 이므로 생략해도 되지만 명시해 두면 헷갈리지 않습니다)
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('static'));


app.get('/', (req, res) => {
	res.send('Hello ChaEunWoo');
});

app.get('/emp_list.ajax', (req,res)=>{
 let mylist = de.selectList();
  res.json(
		{  mylist : mylist }, 
		
		);
});


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
