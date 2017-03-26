const Mongo = require('mongodb').MongoClient
const Express = require('express')
const Path = require('path')
const Url = require('url');

var app = Express()
var bodyparser = require('body-parser')


app.use(bodyparser.urlencoded({ extended: false }))


app.get('/test', function(req, res) {
    res.json(JSON.stringify(Date.now()))
}).listen(process.env.port | 9000)