
//=========================== requiring in packages================ 
const fs = require("fs")
const util = require("util")
const uuidv1 = require("uuid/v1")
const writeFileAsync = util.promisify(fs.writeFile)
const readFileAsync = util.promisify(fs.readFile)


class Notes{

readNotes(){
 return readFileAsync("./db.json", "utf8")
}
writeNotes(data){
 return writeFileAsync("./db.json", JSON.stringify(data))
}
getNotes(){
 return this.readNotes()
 .then(data => {
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
 const {title, text} = data
 
 const newNote = {
  title: title,
  text: text,
  id: uuidv1()
 }
 
 return this.getNotes()
 .then(data =>{
  return[...data, newNote]
 }).then(updatedNotes => {
  return this.writeNotes(updatedNotes)
 }).then(() => {
  return newNote
 })
}
}

module.exports = new Notes()