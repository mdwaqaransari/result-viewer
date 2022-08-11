import axios from "axios";
import React, { useState } from "react";

export default function DataInputComponent() {
  const [personalData, setPersonalData] = useState("");
  const [marksData, setMarksData] = useState("");

  const submitData = async () => {

    //personal
    let newPersonalData = personalData.replace(/[\r\n]+/gm, "");
    let personalArr = [];
    personalArr = newPersonalData.split(",");
    setPersonalData(personalArr);
    let newPersonalArr2 = [];
    for (let i = 0; i < personalArr.length; i++) {
      let element = personalArr[i].trim();
      newPersonalArr2.push(element.substring(1, element.length - 1));
    }
    let personalDetails = {
        rollNo: newPersonalArr2[1],
        enrollmentNo: newPersonalArr2[3],
        name: newPersonalArr2[6],
        fatherName: newPersonalArr2[8],
        motherName: newPersonalArr2[10],
        gender: newPersonalArr2[12],
        course: newPersonalArr2[14],
        branch: newPersonalArr2[16],
    }
    console.log(personalDetails);
    //personal end

    //marks
    let newData = marksData.replace(/[\r\n]+/gm, "");
    let arr = [];
    arr = newData.split(",");
    setMarksData(arr);
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
      let element = arr[i].trim();
      newArr.push(element.substring(1, element.length - 1));
    }

    let papers = [];
    for (let i = 0; i < newArr.length; i += 11) {
      let paper = {
        paperNo: newArr[i],
        paperCode: newArr[i + 1],
        paperName: newArr[i + 2],
        paperType: newArr[i + 3],
        paperCEMarks: newArr[i + 4],
        paperMEMarks: newArr[i + 5],
        paperTotalMarks: newArr[i + 6],
        paperGrade: newArr[i + 7],
        paperCredits: newArr[i + 8],
        paperGradePoints: newArr[i + 9],
        paperPointsScored: newArr[i + 10],
      };
      papers.push(paper);
    }
    //marks end

    const payload = {
      papers,
      personalDetails
    };
    const res = await axios.post(
      "http://localhost:5000/api/student/add",
      payload
    );
    console.log(res.data);
  };

  return (
    <div className="container">
      <div className="main my-3">
        <h2 className="display-5 m-4">Input Data</h2>
            <h2>Enter Personal Details</h2>
        <div className="form-group d-flex justify-content-center py-4">
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="form-control"
            onChange={(e) => setPersonalData(e.target.value)}
          ></textarea>
        </div>

            <h2>Enter Mark Details</h2>
        <div className="form-group d-flex justify-content-center py-4">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="form-control"
            onChange={(e) => setMarksData(e.target.value)}
          ></textarea>
        </div>
        <div className="submit-button">
          <button className="btn btn-lg btn-success" onClick={submitData}>
            Submit
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
