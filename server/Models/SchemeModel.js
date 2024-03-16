const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SchemesSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  eligibility: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Schemes", SchemesSchema);
