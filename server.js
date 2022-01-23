const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");
const uuid = require("./helpers/uuid");

// const router = express.Router();
// const apiRoutes = require("./routes/apiRoutes");
// const htmlRoutes = require("./routes/htmlRoutes");
// router.use("./routes/apiRoutes.js");

const PORT = process.env.PORT || 3001;
exp = express();

exp.use(express.json());
exp.use(express.urlencoded({ extended: true }));
exp.use(express.static("public"));

//middleware
exp.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

//start our server
exp.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
