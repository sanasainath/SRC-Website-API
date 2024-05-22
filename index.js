const express = require("express");
const path = require("path");

const app = express();
const dotenv = require("dotenv").config({ path: path.join(__dirname, ".env") });
app.use("/", (req, res) => {
    res.send("Hello Strivers");
});

app.listen(process.env.PORT, () => {
    console.log(`app listening at port ${process.env.PORT}`);
});
