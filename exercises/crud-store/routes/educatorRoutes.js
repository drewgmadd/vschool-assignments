const express = require("express");
const educatorRoutes = express.Router();
const Educator = require("../models/educator");

educatorRoutes.route("/")
  .get((req, res)=>{
    Educator.find((err, educators)=>{
      if (err) return res.status(500).send(err);
      res.send(educators);
    });
  })
  .post((req, res)=>{
    const newEducator = new Educator(req.body);
    newEducator.save((err)=>{
      if (err) return res.status(500).send(err);
      res.status(201).send(newEducator);
    })
  })

educatorRoutes.route("/:id")
  .get((req, res)=>{
    Educator.findById(req.params.id, (err, educator)=>{
      if (err) return res.status(500).send(err);
      res.status(201).send(educator);
    });
  })
  .put((req, res)=>{
    Educator.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, educator)=>{
      if (err) return res.status(500).send(err);
      res.send(educator);
    })
  })
  .delete((req, res)=>{
    Educator.findByIdAndRemove(req.params.id, (err, educator)=>{
      if (err) return res.status(500).send(err);
    })
  })

module.exports = educatorRoutes;
