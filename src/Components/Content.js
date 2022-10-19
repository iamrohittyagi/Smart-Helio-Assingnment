import React from "react";
import Charts from "./Charts";
import ContentBox from "./ContentBox";

function Content() {
  return (
    <div className="main-content">
      <button className="dwnld-btn">
        <img src="../static/dwnload.png" alt="download-btn" />
        <p>Download</p>
      </button>
      <div className="cntnt-box-coll">
        <ContentBox title="Total Number of Sensors" count="200" />
        <ContentBox title="Average Current" count="20 mA" />
        <ContentBox title="Average Voltage" count="20 V" />
      </div>
      <div className="charts">
        <Charts />
      </div>
    </div>
  );
}

export default Content;
