var app = require('express')();
var store = require('data-store');
var axios = require('axios');
var db = new store({path: '/tmp/data.json'});

app.get("/*", function(req,res) {
res.setHeader("content-type","text/html");
axios("https://raw.githubusercontent.com/theabbie/awto/gh-pages/files/"+req.headers.host.split(".")[0]+".html").then(function(x) {
res.end(x.data);
}).catch(function(y) {
res.status(404).end("404");
});
});

app.listen(process.env.PORT);
