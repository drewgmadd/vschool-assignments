const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const morgan = require("morgan");

const addObject = require("./addObject");

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/newObject", addObject)

app.get("/newObject", (req, res) =>{
  console.log(req.newObj)
  res.send("sent from /newObject endpoint");
})

app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`);
})
