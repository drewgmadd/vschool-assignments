const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const educatorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gradeLevelsTaught: [String],
  classesTaught: [String],
  yearsTeaching: Number,
});

module.exports = mongoose.model("Educator", educatorSchema);
