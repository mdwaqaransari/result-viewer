const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  rollNo: String,
  enrollmentNo: String,
  fatherName: String,
  motherName: String,
  gender: String,
  course: String,
  branch: String,
  papers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Paper",
    },
  ],
});

module.exports = mongoose.model("Student", StudentSchema);
