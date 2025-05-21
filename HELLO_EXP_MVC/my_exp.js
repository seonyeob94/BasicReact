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

app.get('/', (req, res) => {
	res.send('Hello ChaEunWoo');
});



app.get('/emp_list.do', (req, res) => {



	let mylist = de.selectList();
	res.render('emp_list.html', { mylist: mylist });


});

app.get('/emp_detail.do', (req, res) => {


	const e_id = req.query.e_id;
	console.log(e_id);
	let vo = de.selectOne(e_id);
	console.log(vo);
	res.render('emp_detail.html', { vo: vo });


});
app.get('/emp_nod.do', (req, res) => {
	const e_id = req.query.e_id;
	let vo = de.selectOne(e_id);
	res.render('emp_nod.html', { vo: vo });
});



// → bodyParser.urlencoded()가 이미 등록되어 있으므로 req.body 사용
app.post('/emp_nod_act.do', (req, res) => {
	// req.body 에서 vo 만들기
	const vo = {
		'e_id': req.body.e_id,
		'e_name': req.body.e_name,
		'gen': req.body.gen,
		'addr': req.body.addr
	};
	let cnt=de.update(vo);
	res.render('emp_nod_act.html', { cnt: cnt });
	
});

app.get('/emp_add.do', (req, res) => {
	 const nextId = de.getNextId();
	res.render('emp_add.html', { nextId: nextId });
});


app.post('/emp_add_act.do', (req, res) => {
	// req.body 에서 vo 만들기
	const vo = {
		'e_id': req.body.e_id,
		'e_name': req.body.e_name,
		'gen': req.body.gen,
		'addr': req.body.addr
	};
	let cnt=de.insert(vo);
	res.render('emp_add_act.html', { cnt: cnt });
	
});

app.get('/emp_del_act.do', (req, res) => {
	const e_id = req.query.e_id;
	let cnt = de.delete(e_id);
	res.render('emp_del_act.html', { cnt: cnt });
	
});
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
