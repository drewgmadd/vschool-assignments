const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const bounties = [
  {
    fName: "Darth",
    lName: "Vader",
    living: true,
    bountyAmount: 1000,
    type: "Sith",
    _id: 1
  },
  {
    fName: "Luke",
    lName: "Skywalker",
    living: true,
    bountyAmount: 1000,
    type: "Jedi",
    _id: 2
  }
]

app.get("/bounty", (req, res)=>{
  return res.send(bounties);
})

app.post("/bounty", (req, res)=>{
  bounties.push(req.body)
  return res.send({message: "here is your new list of bounties", object: bounties});
});

app.delete("/bounty/:id", (req, res)=>{
  return res.send(bounties.filter(bounty=>{
    return bounty._id !== Number(req.params.id)
  }))
})

app.put("bounty/:id", (req, res)=>{
  const index = bounties.findIndex(item => item._id === req.params.id)
  console.log(index);
  const foundBounty = bounties[index];
  for (let prop in foundBounty) {
    if (foundBounty.hasOwnProperty(prop)) {
      foundBounty[prop] = req.body[prop] || foundBounty[prop]
    }
  }
  return res.send(bounties)
});

app.listen(port, ()=>{
  console.log(`App is listening on port ${port}`);
});
