var express = require("express");
var http = require("http");
var port = 8080;
var app = express();

app.get("/todo", function(req, res) {
	res.sendFile(__dirname + "/client/html/todo.html");
});

app.get("/", function(req, res) {
	res.end("GET root");
});

app.get("/testroute", function(req, res) {
	res.end("GET testroute");
});

http.createServer(app).listen(port);
console.log("listening at port " + port);
