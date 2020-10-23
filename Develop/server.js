

const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000
app.use(express.static(`public`))

const path = require("path")

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/// node server js
app.get("/", function(req,res) {
res.json(path.join(___dirname, "./assets/index.html"))
})

app.listen(PORT, () => {
 console.log(`listening at http://localhost:${PORT}`)
})

app.get("api/notes", (req, res) => {
 res.sendFile(path.join(__dirname, "/db.json"))
})