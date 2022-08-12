import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

export default function SearchResult() {
  const [rollNo, setRollNo] = useState("");
  const navigate = useNavigate();
  const onSubmit = () => {
  navigate("/view-result?rollNo="+rollNo, {replace:true})
};
  return (
    <div className="container">
      <div className="heading py-4">
        <h2 className="display-5">Search Result</h2>
      </div>
      <div className="main d-flex justify-content-center">
        <div className="search-container p-5 border mt-5">
          <h4 className=" mb-4 display-5">Search</h4>
          <div className="form-group">
            {/* <label htmlFor="rollNo">Enter Roll No.</label> */}
            <input
              type="text"
              className="form-control"
              id="rollNo"
              placeholder="Enter Roll No"
              onChange={(e) => setRollNo(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <button className="btn btn-success w-100" onClick={onSubmit}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
