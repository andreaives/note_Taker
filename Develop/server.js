

// ========================Paths & Port===================================

const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoute")
const PORT = process.env.PORT || 3000;



// ============Sets up the Express app to handle data parsing==============
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes)
app.use(express.static("public"))

// ===================== Listeners to initiate server ======================

app.listen(PORT,function (){
 console.log("Listening on PORT: " + PORT)
})
