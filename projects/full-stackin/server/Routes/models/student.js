const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    first:{
      type: String,
      required: true
    },
    middle: String,
    last: {
      type: String,
      required: true
    }
  },
    classes: [String],
    esl: Boolean,
    specialNeeds: Boolean,
    reducedLunch: Boolean,
    ethnicity: String
})

module.exports = mongoose.model("student", studentSchema);
