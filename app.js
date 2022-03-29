//package dotenv for use environment variables from .env file
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");

const app = express();

//avoid compatibility problems with browsers
app.use(cors);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App listen http://localhost:${port}`);
});

dbConnect();