const express = require("express");
const Router = express.Router();
const Student = require("../models/Student");
const Paper = require("../models/Paper");

Router.post("/add", async (req, res) => {
  console.log("Request recieved for adding student");
  let personalDetails = req.body.personalDetails;
  let papers = req.body.papers;
  try {
    let student = new Student(personalDetails);
    var savedStudent = await student.save();
    for(let i=0; i<papers.length; i++){
      let paper = new Paper(papers[i]);
      paper.student = savedStudent;
      paper.save();
    }
    res.json(papers);
  } catch (err) {
    console.log(err);
  }
});

Router.get("/allPapers", async(req,res)=>{
  try{
    let papers = await Paper.find().populate("student");
    return res.json(papers);
  }catch(err){
    console.log(err);
  }
})

Router.get("/papers", async(req,res)=>{
  let rollNo = req.body.rollNo;
  try{
    let student = await Student.findOne({rollNo});
    let papers = await Paper.find({student}).populate("student");
    res.json(papers);
  }catch(err){
    console.log(err);
  }
})
module.exports = Router;
