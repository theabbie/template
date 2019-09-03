var app = require('express')();
var store = require('data-store');
var axios = require('axios');
var $ = require("cheerio");
var db = new store({path: '/tmp/data.json'});

app.get("/*", function(req,res) {
var appp = req.headers.host.split(".")[0];
if (appp=="hl") {
res.end("hi")
}
else {
res.status(404).end("404");
}
});

app.listen(process.env.PORT);
