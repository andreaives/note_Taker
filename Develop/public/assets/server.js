

// ========================Dependencies===================================

const express = require("express");
const app = express();
// const fs = require("fs");


const path = require("path");
const PORT = process.env.PORT || 3000;
// const express = app.use(app.static(`public`))
// const router = express.Router();
// const uuid = require("uuid")


// ============Sets up the Express app to handle data parsing==============
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================== Requiring in route pages==============================

// require("./routes/apiRoutes")(app);
require("./routes/htmlRoute")(app);

// ===================== Listeners to initiate server ======================

app.listen(PORT,function (){
 console.log("Listening on PORT: " + PORT)
})
