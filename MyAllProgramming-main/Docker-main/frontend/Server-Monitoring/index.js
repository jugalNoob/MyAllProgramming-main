const express = require("express");
const app = express();
//require("./db/conn");  Assuming this file connects to a database
//require('dotenv').config(); // Loads environment variables from a .env file
const router = require("./routes/router"); // Assuming this file contains route definitions
//const cors = require("cors"); // Enables Cross-Origin Resource Sharing

const port = 9000;
app.use(express.json());

app.use(router);




app.listen(port , ()=>{
    console.log(`${new Date()} : Server started at http://localhost:${port}`);
})
