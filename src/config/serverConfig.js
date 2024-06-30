const path = require("path");
const dotenv = require("dotenv").config({
  path: path.join(__dirname, "../", "../", ".env"),
});
module.exports={
    PORT:process.env.PORT,
    mongoURI:process.env.mongoURI,
    EMAIL_PASS:process.env.EMAIL_PASS,
    EMAIL_ID:process.env.EMAIL_ID,
    JWT_KEY:process.env.JWT_KEY

}
