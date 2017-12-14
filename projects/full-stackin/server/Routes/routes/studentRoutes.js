const express = require("express");
const studentRoutes = express.Router()
const Student = require("../models/student");

studentRoutes.get("/", (req, res)=>{
  Student.find((err, students)=>{
    if (err) return res.status(500).send(err);
    res.send(students);
  });
});

studentRoutes.post("/", (req, res)=>{
  const newStudent = new Student(req.body);
  newStudent.save(err=>{
    if (err) return res.status(500).send(err);
    res.send(newStudent);
  });
});

studentRoutes.get("/:id", (req, res)=>{
  Student.findById(req.params.id, (err, student)=>{
    if (err) return res.status(500).send(err);
    res.send(student);
  });
});

studentRoutes.delete("/:id", (req, res)=>{
  Student.findByIdAndRemove(req.params.id, (err, student)=>{
    if (err) return res.status(500).send(err);
    res.send({message: "The item has been removed", student});
  });
});

module.exports = studentRoutes;
