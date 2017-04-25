var express = require("express");
var app = express();
var serv = require("http").Server(app);

app.get('/',function(req,res){
    res.sendFile(__dirname + '/build/index.html');
});

app.use('/build',express.static(__dirname + '/build'));

serv.listen(2000);

console.log("server started");