import React from "react";
import "./DisplayScreen.css";
const DisplayScreen = ({ value }) => {
  
  return (
    <>
      <div className="display-screen" id="display">{value}</div>
    </>
  );
};

export default DisplayScreen;
