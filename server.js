const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const exp = express();

exp.use(express.json());
exp.use(express.urlencoded({ extended: true }));
exp.use(express.static("public"));

exp.use("/", htmlRoutes);
exp.use("/api", apiRoutes);

//start our server
exp.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
