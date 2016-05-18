'use strict';
var path = process.cwd();
var timeConvert = require(path+"/app/controller/timeConvert.js");
module.exports = function(app){
    app.route('/').get(function (req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });
    app.route('/:str').get(function(req,res){
        var str = req.params.str;
        var date = timeConvert(str);
        res.json(date);
       //res.send(date);
    })
};