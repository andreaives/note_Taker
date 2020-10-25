

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

// ================== Requiring in route pages==============================

require("./public/routes/apiRoutes")(app);
require("./public/routes/htmlRoutes")(app);