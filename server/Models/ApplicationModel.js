const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  applicationID: {
    type: String,
    required: true,
  },
  schemeID: {
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
  },
});

module.exports = mongoose.model("Application", ApplicationSchema);
