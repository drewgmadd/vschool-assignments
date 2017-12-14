const express = require("express");
const app = express();
const port = process.env.PORT || 5550
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/air-quality",
  {useMongoClient: true},
  err => {
      if (err) throw err;
      console.log("Connected to the database");
  }
);

app.use("/students", require("./Routes/routes/studentRoutes"));

app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`);
})
