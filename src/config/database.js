const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv").config({
  path: path.join(__dirname, "../", "../", ".env"),
});
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const mongoURI = process.env.mongoURI;
const connect = async () => {
  await mongoose
    .connect(mongoURI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

module.exports = { connect };
