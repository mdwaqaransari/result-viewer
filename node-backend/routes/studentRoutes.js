const express = require("express")
const Router = express.Router();
const Student = require("../models/Student");
const Paper = require("../models/Paper");

Router.post("/add", async(req, res)=>{
    console.log("Request recieved for adding student");
    let personalDetails = req.body.personalDetails;
    let papers = req.body.papers;
    console.log(papers);
    console.log(personalDetails);
    try{
        let student = new Student(personalDetails);
        await student.save();
        res.json(papers);
    }catch(err){
        console.log(err);
    }
});

module.exports = Router;