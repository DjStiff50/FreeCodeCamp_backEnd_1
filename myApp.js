var express = require("express");
var app = express();

app.get('/json',function(req,res,next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});
app.use('/public',express.static(__dirname + "/public"));
app.use('/views',express.static(__dirname + "/views"));


module.exports = app;
                                                               