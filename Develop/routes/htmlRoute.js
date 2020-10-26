
//============Require path to obtain the correct file path=============
const path = require("path")
const router = require("express").Router()

// =======================ROUTING==============================

 //show notes html
 router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"))
 })

 //default to home page 
 router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"))
 })


module.exports = router