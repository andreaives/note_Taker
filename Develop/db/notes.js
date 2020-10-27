
//=========================== requiring in packages================ 
const fs = require("fs")
const util = require("util")
const writeFileAsync = util.promisify(fs.writeFile)
const readFileAsync = util.promisify(fs.readFile)
const uuidv1 = require("uuidv1")

//====================== Notes Class w/ All Functions ==============

class Notes{
readNotes(){
 return readFileAsync("db/db.json", "utf8")
}
writeNotes(data){
 return writeFileAsync("db/db.json", JSON.stringify(data))
}
getNotes(){
 return this.readNotes()
 .then(data => {
  console.log(data)
  let parsedNotes;
  try{
   parsedNotes = [].concat(JSON.parse(data))
  }
  catch(err) {
   parsedNotes = []
  
  }
  return parsedNotes
 })
}
addNote(data){
 const { title, text } = data
 const newNote = { title, text, id: uuidv1()}
 
 return this.getNotes()
 .then((data) =>{
  return[...data, newNote]
 }).then((updatedNotes) => {
  return this.writeNotes(updatedNotes)
 }).then(() => {
  return newNote
 })
}
deleteNotes(id) {
 return this.getNotes()
 .then((remove) => remove.filter((deletedNote) => deletedNote.id !== id))
 .then((filteredNotes)=> this.writeNotes(filteredNotes));
}
}

module.exports = new Notes()