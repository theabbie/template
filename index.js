var app = require('express')();
var imaps = require('imap-simple');
const simpleParser = require('mailparser').simpleParser;

app.get("/*", function(req,res) {
var config = {
    imap: {
        user: 'abhishek7gg7@gmail.com',
        password: 'weppkssgcunlrjfp',
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        authTimeout: 3000
    }
};

imaps.connect(config).then(function (connection) {
    return connection.openBox('INBOX').then(function () {
        var searchCriteria = ['1:10'];
        var fetchOptions = {
            bodies: ['HEADER', 'TEXT', ''],
        };
        return connection.search(searchCriteria, fetchOptions).then(function (messages) {
            res.json(messages)
            });
        });
    });
})

app.listen(process.env.PORT);
