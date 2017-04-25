var express = require("express");
var app = express();
var serv = require("http").Server(app);

app.get('/',function(req,res){
    res.sendFile(__dirname + '/dist/index.html');
});

app.use('/dist',express.static(__dirname + '/dist'));

serv.listen(2000);

console.log("server started");