

// ========================Dependencies===================================

const express = require("express");
const app = express();
const router = express.Router();
const fs = require("fs");
const PORT = process.env.PORT || 3000;
const uuid = require("uuid")
const path = require("path")
// const express = app.use(app.static(`public`))


// ============Sets up the Express app to handle data parsing==============
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// // // ====================  Setting up for PORT  =================================
// // app.listen(PORT, () => {
// //  console.log(`listening at http://localhost:${PORT}`)
// // })

// //=====================  Node server js  ===================================
// app.get("/", function(req,res) {
// res.json(path.join(__dirname, "./assets/index.html"))
// })


// // ======================  Show notes page  =================================
// // app.get("/notes", function(req,res) {
// //  res.json(path.join(___dirname, "./public/notes.html"))
// //  })

//  app.listen(PORT, () => {
//   console.log(`listening at http://localhost:${PORT}`)
//  })
 
//  app.get("api/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "/db.json"))
//  })

// app.get("api/notes", (req, res) => {
//  res.sendFile(path.join(__dirname, "/db.json"))

// })


// router.get("/api/notes", (req, res) => {

// })
// Sets up the Express app to handle data parsing


/// node server js
app.get("/", function(req,res) {
res.json(path.join(__dirname, "/public/assets/index.html"))
})


app.get("api/notes", (req, res) => {
 res.sendFile(path.join(__dirname, "/db.json"))
})


// ================== Setting up PORT to listen ============

app.listen(PORT, () => {
 console.log(`listening at http://localhost:${PORT}`)
})