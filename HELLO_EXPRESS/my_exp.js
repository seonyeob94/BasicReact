const express = require('express');
const bodyParser = require('body-parser');
const path       = require('path');  
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // 기본값이므로 생략해도 무방


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Hello ChaEunWoo');
});

app.get('/param', (req, res) => {
	const menu = req.query.menu;
	console.log("menu",menu);
	res.send('PARAM:'+menu);
});


app.post('/post', (req, res) => {
	const menu = req.body.menu;
	console.log("menu",menu);
	res.send('POST:'+menu);
	
});

app.get('/forw', (req, res) => {
	let a = "홍길동";
	let arr = ["전우치", "이순신", "예순이"];
	let mylist = [
		{'e_id' :1, 'e_name':1, 'gen' :1, 'addr' :1},
		{'e_id' :2, 'e_name':2, 'gen' :2, 'addr' :2},
		{'e_id' :3, 'e_name':3, 'gen' :3, 'addr' :3}
	]
	res.render('forw', { a, arr, mylist });
	//res.sendFile(path.join(__dirname, 'forw.html'));
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

