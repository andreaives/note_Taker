
//============Require path to obtain the correct file path=============
const path = require("path")

// =======================ROUTING==============================

module.exports = function (app) {

 //show notes html
 app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../html/notes.html"))
 })

 //default to home page 
 app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../html/index.html"))
 })
}
