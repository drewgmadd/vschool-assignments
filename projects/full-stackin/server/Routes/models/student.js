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
    depthOfKnowledge: {
      type: Number,
      enum: [1, 2, 3, 4]
    },
    esl: Boolean,
    specialNeeds: Boolean,
    reducedLunch: Boolean,
    ethnicity: String
})

module.exports = mongoose.model("student", studentSchema);
