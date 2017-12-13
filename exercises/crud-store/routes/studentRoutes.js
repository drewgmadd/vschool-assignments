const express = require("express");
const studentRoutes = express.Router();
const Student = require("../models/student");

studentRoutes.route("/")
  .get((req, res)=>{
    Student.find((err, students)=>{
      if (err) return res.status(500).send(err);
      res.send(students)
    });
  })
  .post((req, res)=>{
    const newStudent = new Student(req.body);
    newStudent.save((err)=>{
      if (err) return res.status(500).send(err);
      res.status(201).send(newStudent);
    });
  })

  studentRoutes.route("/:id")
    .get((req, res)=>{
      Student.findById(req.params.id, (err, student)=>{
        if (err) return res.status(500).send(err);
        res.status(201).send(student)
      });
    })
    .put((req, res)=>{
      Student.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, student)=>{
        if (err) return res.status(500).send(err);
        res.send(student);
      });
    })
    .delete((req, res)=>{
      Student.findByIdAndRemove(req.params.id, (err, student)=>{
        if (err) return res.status(500).send(err);
        res.send({message: "Successfuly Removed", student})
      });
    })

module.exports = studentRoutes;
