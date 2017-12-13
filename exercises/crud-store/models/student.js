const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  gender: String,
});

module.exports = mongoose.model("Student", studentSchema);
