//https://harmonious-daffy-quesadilla.glitch.me
var express = require("express");
var app = express();

app.use('/public',express.static(__dirname + "/public"));
app.use('/views',express.static(__dirname + "/views"));

app.get('/json',function(req,res,next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});
app.get(
  "/now",
  (req, res, next) => {
    req.time = "example"
    next();
  },
  (req, res) => {
    console.log(req.time);
    res.send({
      time: req.time
    });
  }
);
module.exports = app;
                                                               