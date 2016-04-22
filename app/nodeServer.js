//serves everything in /app/* as localhost:8080/*
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.listen(port, function () {
  console.log("server started, listening on port:" + port);
});
