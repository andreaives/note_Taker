

var express = require("express");
var fs = require("fs");
var app = express();
var PORT = process.env.PORT || 3001

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/// node server js
app.get("/", function(req,res) {
res.json(path.join(___dirname, "./assets/index.html"))
})