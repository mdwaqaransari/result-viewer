import React, { useState, useEffect } from "react";
import papersData from "./paper.json";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function ResultViewer() {
  const [papers, setPapers] = useState([]);
  const [paperInfo, setPaperInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const semesters = ["1", "2", "3", "4"];
  useEffect(() => {
    let rollNo = searchParams.get("rollNo");
    // (async () =>{
    //   try {
    //     let res = await axios.get("https://localhost:5000/api/student/papers", {
    //       rollNo,
    //     });
    //     console.log(res);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // })();
    console.log(rollNo);

    setPapers(papersData);
    console.log(papersData);
  }, []);

  const calculateTotalMarksOfSemester = (semesterNo) => {
    let totalMarks = 0;
    let count = 0;
    let credits = 0;
    let points = 0;
    let pointsScored = 0;
    papers.forEach((paper) => {
      if (paper.paperSemesterNo === semesterNo) {
        if (paper.paperType === "Cr.") {
          count++;
          credits += parseInt(paper.paperCredits);
          points += parseInt(paper.paperGradePoints);
          pointsScored += parseInt(paper.paperPointsScored);
          totalMarks += parseInt(paper.paperTotalMarks);
        }
      }
      setPaperInfo({
        count,
        credits,
        points,
        pointsScored,
        totalMarks,
      });
    });
    return `${totalMarks}/${count * 100}`;
  };
  return (
    <div className="container">
      <div className="heading">
        <h2 className="display-5 mt-4">View Result</h2>
      </div>
      {semesters.map((semester) => {
        return (
          <div className="main mb-4 mt-4" key={semester}>
            <h4 className="py-2">Semester : {semester}</h4>
            <table className="table table-bordered">
              <thead>
                <tr>
                  {/* <th>Semester No.</th> */}
                  <th>Code</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>CE Marks</th>
                  <th>ME Marks</th>
                  <th>Total Marks</th>
                  <th>Credits</th>
                  <th>Points</th>
                  <th>Credit Points Scored</th>
                </tr>
              </thead>
              <tbody>
                {papersData.map((paper) => {
                  return paper.paperSemesterNo === semester ? (
                    <tr key={paper.paperCode}>
                      {/* <td>{paper.paperSemesterNo}</td> */}
                      <td>{paper.paperCode}</td>
                      <td>{paper.paperName}</td>
                      <td>{paper.paperType}</td>
                      <td>{paper.paperCEMarks}</td>
                      <td>{paper.paperMEMarks}</td>
                      <td>{paper.paperTotalMarks}</td>
                      <td>{paper.paperCredits}</td>
                      <td>{paper.paperGradePoints}</td>
                      <td>{paper.paperPointsScored}</td>
                    </tr>
                  ) : (
                    ""
                  );
                })}
              </tbody>
            </table>
            <div className="other-details">
              <span>
                Total marks without audit paper : &nbsp;
                {paperInfo.totalMarks}/{paperInfo.count*100}
              </span>
              <br />
              <span>Total marks with audit paper : &nbsp; Kya kroge janke</span>
              <br />
              <span>
                <strong>Semester CGPA : &nbsp; </strong>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
