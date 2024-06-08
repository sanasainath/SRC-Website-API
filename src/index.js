const express = require("express");
const bodyParser=require('body-parser');
const app = express();
const dotenv = require("dotenv").config();
const PORT=process.env.PORT;

const cors = require('cors');  // Import the CORS middleware
app.use(cors());  // Use the CORS middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const apiRoutes=require('./routes/index');

const {connect}=require('./config/database');
app.use('/api',apiRoutes);

app.listen(PORT, async() => {
    console.log(`app listening at port ${PORT}`);
    await connect();
});
