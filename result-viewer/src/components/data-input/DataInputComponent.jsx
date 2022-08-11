import React, { useState } from 'react'

export default function DataInputComponent() {
    const [data, setData] = useState("");

    const submitData = ()=>{
        let len = data.length;
        let newData = data.substring(0,len-1);
        newData = data.replace(/[\r\n]+/gm, "");
        let arr = [];
        arr = newData.split(",");
        setData(arr);
        let newArr=[];
        let str = "";
        for(let i=0; i<arr.length; i++){
            let element = arr[i].trim();
            newArr.push(element.substring(1,element.length-1));
            str += element.substring(1, element.length - 1);
        }
        console.log(str);
        
        let papers =[];
        for(let i=0; i<newArr.length; i+=11){
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
        console.log(papers);
    }

  return (
    <div className="container">
      <div className="main my-5">
        <h2 className="display-5 m-4">Input Data</h2>
        <div className="form-group d-flex justify-content-center py-4">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="form-control"
            onChange={(e) => setData(e.target.value)}
          ></textarea>
        </div>
        <div className="submit-button">
          <button className="btn btn-lg btn-success" onClick={submitData}>Submit</button>
        </div>
        <div>
          <span>{data}</span>
        </div>
      </div>
    </div>
  );
}
