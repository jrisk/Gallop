const http = require('http');

var express = require('express');

var app = express();

app.use(express.static(__dirname + '/'));

//var buf = new Buffer(10);

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer(app);

server.listen(port, hostname, () => {
	console.log(`server running on http://${hostname}:${port}/`);
});

app.get("/", function(req,res) {
	res.sendFile('/index.html');
})