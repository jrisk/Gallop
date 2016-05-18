const http = require('http');

var express = require('express');

var app = express();

//var buf = new Buffer(10);

const hostname = '127.0.0.1';

const port = 3002;

console.log(app);

const server = http.createServer(app);

server.listen(port, hostname, () => {
	console.log(`server running on http://${hostname}:${port}/`);
});