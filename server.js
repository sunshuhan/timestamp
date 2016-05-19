'use strict';
var http = require('http');
var express = require('express');
var routes = require('./app/routes/index.js');
//var path = require('path');
var app = express();
//var port = process.env.PORT || 8080;
routes(app);
app.listen(process.env.PORT||8080,function(){
    console.log("listening on port 8080......");
});

