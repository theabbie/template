var app = require('express')();
var store = require('data-store');
var db = new store({path: '/tmp/data.json'});

app.get("/*", function(req,res) {
res.setHeader("content-type","text/html");
res.end("<body background='"+req.headers.host.split(".")[0]+"'></body>")
})

app.listen(process.env.PORT);
