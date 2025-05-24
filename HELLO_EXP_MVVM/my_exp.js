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
 console.log(mylist);
  res.json(
		{  mylist : mylist }
		
		);
});

app.get('/emp_detail.ajax', (req,res)=>{
	const e_id = req.query.e_id;
 	let vo = de.selectOne(e_id);
 	console.log(vo);
  	res.json(
		{  vo : vo }
		
		);
});

app.post('/emp_mod.ajax', (req,res)=>{
	const vo = {
		'e_id': req.body.e_id,
		'e_name': req.body.e_name,
		'gen': req.body.gen,
		'addr': req.body.addr
	};
	let cnt=de.update(vo);
	
 	console.log(cnt);
  	res.json(
		{  cnt : cnt }
		
		);
});

app.post('/emp_add.ajax', (req,res)=>{
	const vo = {
		'e_id': req.body.e_id,
		'e_name': req.body.e_name,
		'gen': req.body.gen,
		'addr': req.body.addr
	};
	let cnt=de.insert(vo);
	
 	console.log(cnt);
  	res.json(
		{  cnt : cnt }
		
		);
});

app.post('/emp_del.ajax', (req,res)=>{
	const e_id = req.body.e_id;
	const vo = {
		'e_id': req.body.e_id,
		'e_name': req.body.e_name,
		'gen': req.body.gen,
		'addr': req.body.addr
	};
	//let cnt=de.delete(e_id); // id로 받기
	let cnt=de.delete(vo.e_id); // vo에서 id를 받기
	
 	console.log(cnt);
  	res.json(
		{  cnt : cnt }
		
		);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
