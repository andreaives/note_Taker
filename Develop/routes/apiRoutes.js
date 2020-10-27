
// ==============seperate the routes to later require in server.js file ===========

const router = require("express").Router()
const notes = require("../db/notes")

//=============================== Get Note Route ==================================

router.get("/notes", function(req,res){
 notes.getNotes()
 .then((data) => {
  res.json(data)
 })
})

//============================= Post Note Route ==================================

router.post("/notes", function(req, res){
 notes.addNote(req.body)
 .then (()=>
 res.json({ok: true}))
})

//============================ Deletes Note Route ================================

router.delete("/notes/:id", function(req, res){
notes.deleteNotes(req.params.id)
.then(()=>
res.json({ok: true}))
})

module.exports= router