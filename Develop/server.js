

// ========================Paths & Port===================================

//=========================Require Express =======================
const express = require("express");
const app = express();

//==========================Require Routes =======================
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoute")

//============Port Access Either Localhost or Heroku =============
const PORT = process.env.PORT || 3000;


//====================== Middle Layer ===========================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes)
app.use(express.static("public"))

// ===================== Listener ======================

app.listen(PORT, () => console.log(`Listening on PORT: " + ${PORT}`));

