const mongoose = require("mongoose");
const ApplicationSchema = new mongoose.Schema({
  applicationID: {
    type: String,
    unique: true,
    default: Math.floor(Math.random() * 100000).toString().padStart(5, '0')
  },
  title: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Processed", "Processing", "Rejected", "Open"],
    default: "Open",
  },
});

module.exports = mongoose.model("Application", ApplicationSchema);
