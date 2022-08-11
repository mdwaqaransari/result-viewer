const mongoose = require("mongoose");

const PaperSchema = new mongoose.Schema({
  paperNo: Number,
  paperCode: String,
  paperName: String,
  paperType: String,
  paperCEMarks: Number,
  paperMEMarks: Number,
  paperTotalMarks: Number,
  paperGrade: String,
  paperCredits: Number,
  paperGradePoints: Number,
  paperPointsScored: Number,
  paperSemesterNo: Number,
  students : [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }
]
});

module.exports = mongoose.model("Paper", PaperSchema);
