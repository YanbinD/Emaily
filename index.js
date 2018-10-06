const express = require('express'); //Common js module 
const app = express();

app.get('/', function(req, res){
	res.send("hello");
}) ;

const PORT = process.env.PORT || 3000;
app.listen(PORT);
