const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema({
  title: String,
  grade: Number,
  numberOfStudents: Number,
  days: [String]
})

module.exports = mongoose.model("class", classSchema);
