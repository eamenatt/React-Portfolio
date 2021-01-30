const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: { type: String, required: true },
  details: { type: String, required: true },
  url: { type: String, required: true }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
