import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ResultHandler from "./ResultHandler";

export default function AllResultViewer() {
  const rollNos = ["2020104037", "2020104038"];
  return (
    <div className="container">
      <div className="header"></div>
      <div className="container-main">
        <div className="main">
          <Accordion>
            {rollNos.map((rollNo) => {
              return (
                <Accordion.Item eventKey={rollNo} key={rollNo}>
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    <ResultHandler rollNumber={rollNo} />
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
