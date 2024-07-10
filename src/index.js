const express = require("express");
//const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const { PORT } = require("./config/serverConfig");
var bodyParser = require("body-parser");
const cors = require("cors"); // Import the CORS middleware
app.use(cors()); // Use the CORS middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiRoutes = require("./routes/index");

const { connect } = require("./config/database");
app.use("/api", apiRoutes);
console.log(process.env.mongoURI);
app.listen(PORT, async () => {
  console.log(`app listening at port ${PORT}`);
  await connect();
});
