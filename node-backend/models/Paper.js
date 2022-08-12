const mongoose = require("mongoose");

const PaperSchema = new mongoose.Schema({
  paperNo: String,
  paperCode: String,
  paperName: String,
  paperType: String,
  paperCEMarks: String,
  paperMEMarks: String,
  paperTotalMarks: String,
  paperGrade: String,
  paperCredits: String,
  paperGradePoints: String,
  paperPointsScored: String,
  paperSemesterNo: String,
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
});

module.exports = mongoose.model("Paper", PaperSchema);
