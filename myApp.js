//https://harmonious-daffy-quesadilla.glitch.me
var express = require("express");
var app = express();

app.use('/public',express.static(__dirname + "/public"));
app.use('/views',express.static(__dirname + "/views"));

app.get('/json',function(req,res,next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});
app.get('/now',function(req,res,next) {
  req.time = new Date().toString();
  next();
}, function (req,res){
  res.send({time: req.time})
});

module.exports = app;
                                                               