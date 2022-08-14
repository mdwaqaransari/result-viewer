import React, { useState } from "react";
import ResultViewer from "../result-viewer/ResultViewer";
// const ResultViewer = React.lazy(() => import("../result-viewer/ResultViewer"));

export default function ResultHandler(props) {
  const [view, setView] = useState(false);

  return (
    <div>
      <div className="container">
        {!view ? (
          <button className="btn btn-success" onClick={() => setView(true)}>
            View Result
          </button>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {view ? <ResultViewer rollNumber={props.rollNumber} /> : <div></div>}
      </div>
    </div>
  );
}
