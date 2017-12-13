const express = require("express");
const port = process.env.PORT || 4001;
const bodyParser = require("body-parser");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/students",
    {useMongoClient: true},
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);


app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/students", require("./routes/studentRoutes"));
app.use("/educators", require("./routes/educatorRoutes"));

app.listen(port, ()=>{
  console.log(`You're server is running on port ${port}`)
})
