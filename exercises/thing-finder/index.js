const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const skiRouter = require("./ski-routes");

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/", skiRouter)



app.listen(port, ()=>{
  console.log(`Server is listeneing of port ${port}`)
});
