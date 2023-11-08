const express = require("express");
const app = express();
require("./logs/db")

const router = require("./routes/router"); // Assuming this file contains route definitions
const cors = require("cors"); // Enables Cross-Origin Resource Sharing

const port = 9000;
app.use(express.json());

app.use(router);
app.use(cors());



app.listen(port , ()=>{
    console.log(`${new Date()} : Server started at http://localhost:${port}`);
})






// mongoose.connect("mongodb://localhost:27017/anku",{



// useNewUrlParser:true,
// useCreateIndex:true,

// useUnifiedTopology:true,
// useFindAndModify:false
// }).then((result) => {

//     console.log("connection mongodb")


// }).catch((err) => {

//     console.log("not connection mongodb")
// });




