const mysql = require('sync-mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');



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

app.get('/',    (req,res)=> res.redirect('/index.do'));
app.get('/index.do', (req,res)=>{
 
  res.render('index.html');
});

app.post('/jquery.ajax', (req, res) => {
    // JSON 형식으로 "Hello from Express!" 메시지를 응답합니다.
    //const menu = req.query.menu;
    console.log(req.body.menu);
    const menu = req.body.menu;
    res.json(
		{ message: 'Hello KARINA!', menu : menu }, 
		
		);
}); 
app.post('/axios.ajax', (req, res) => {
     console.log(req.body.params.menu);
     const menu = req.body.params.menu;
    res.json(
		{ message: 'Hello winter!'}, 
		
		);
}); 
app.post('/fetch.ajax', (req, res) => {
	const menu = req.body.menu;
    console.log(req.body.menu);
    //console.log(req.query.menu);
    res.json(
		{ message: 'Hello NINGNING!'}, 
		
		);
}); 
app.get('/one.ajax', (req, res) => {
	
    res.json({ cnt:1});
}); 
app.get('/two.ajax', (req, res) => {
	
    res.json({ cnt:2});
}); 

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
