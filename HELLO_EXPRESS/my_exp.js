const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

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

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});