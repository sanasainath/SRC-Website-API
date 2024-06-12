const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require('mongoose');
const app = express();
dotenv.config({ path: './config/config.env' }); 
app.use(express.urlencoded({ extended: true }));
var bodyParser = require('body-parser');
const apiRoutes=require('./routes/index');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
if (!process.env.CONN_STR) {
    console.error('CONN_STR is not defined in the environment variables');
    process.exit(1); // Exit the process if the variable is not defined
}

app.use(express.json()); 

mongoose
    .connect(process.env.CONN_STR, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('MongoDB Connection Error:', error);
    });
app.listen(process.env.PORT, () => {
    console.log("app listening at port",3001 );
});


app.use('/api',apiRoutes);

app.listen(3001, () => {
    console.log('Server is running on port 3001.');
});
