const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classFeedbackSchema = new Schema(
  {
    id: { type: String},
    year: { type: String },
    section: { type: String },
    date: { type: Date, default: Date.now() },
    remarks: { type: String },
    periodDetails: [
      {
        subject: { type: String },
        faculty: { type: String },
        isTaken: { type: Boolean },
      },
    ],
  },
  { timestamps: true }
);

const classFeedback = mongoose.model("ClassFeedback", classFeedbackSchema);

module.exports = classFeedback;
