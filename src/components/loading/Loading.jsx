import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loader">
      <div className="line_loader">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Loading;
