

var express = require("express");
var fs = require("fs");
var app = express();
var PORT = process.env.PORT || 3001

app.get("/", function(req,res) {
 res.json(path.join(___dirname, "assets/index.html"))
}