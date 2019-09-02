var app = require('express')();
var store = require('data-store');
var db = new store({path: '/tmp/data.json'});

app.get("/*", function(req,res) {
res.end(req.headers.host)
})

app.listen(process.env.PORT);
