const express = require('express'); //Common js module 
const app = express();

app.get('/', function(req, res){
	res.send("hello");
}) ;

const PORT = process.env.port || 3000;
app.listen(PORT, function() {
	console.log("server running on port 3000");
});
