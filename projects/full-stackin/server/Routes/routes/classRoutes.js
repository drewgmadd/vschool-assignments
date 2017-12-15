const express = require("express");
const classRoutes = express.Router();
const Class = require("../models/class");

classRoutes.get("/", (req, res)=>{
  Class.find((err, classes)=>{
    if (err) return res.status(500).send(err);
    res.send(classes);
  });
});

classRoutes.post("/", (req, res)=>{
  const newClass = new Class(req.body);
  newClass.save(err=>{
    if (err) return res.status(500).send(err);
    res.send(newClass);
  });
});

classRoutes.get("/:id", (req, res)=>{
  Class.findById(req.params.id, (err, foundClass)=>{
    if (err) return res.status(500).send(err);
    res.send(foundClass);
  });
});

classRoutes.delete("/:id", (req, res)=>{
  Class.findByIdAndRemove(req.params.id, (err, foundClass)=>{
    if (err) return res.status(500).send(err);
    res.send({message: "The class has been removed", foundClass});
  });
});

module.exports = classRoutes;
