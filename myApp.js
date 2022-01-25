var express = require("express");
var app = express();

app.get('/json',function(req,res,next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});
app.get('/now',function(req,res,next) {
  req.time = new Date().toString();
  next();
}, function (req,res){
  req.setEncoding({time : req.time})
});
app.use('/public',express.static(__dirname + "/public"));
app.use('/views',express.static(__dirname + "/views"));


module.exports = app;
                                                               