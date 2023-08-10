import React, { useState } from "react";
import "./ControlSwitch.css";
const ControlSwitch = ({
  value,
  setIsBank,
  setDisplayScreen,
  setIsPoweredOn,
  isPoweredOn
}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="switch-wrapper">
      <h3>{value}</h3>
      <div className="switch-box">
        <div
          className="switch"
          
          onClick={(e) => {
            value === "Power" && setIsPoweredOn((state) => !state) 
            value === "Power" && setDisplayScreen("");
            setIsActive(!isActive);
            if (isActive) {
              e.currentTarget.style.marginLeft = "auto";
              isPoweredOn && value === "Bank" && setDisplayScreen("Smooth Piano kit");
            } else {
              e.currentTarget.style.marginLeft = 0;
              isPoweredOn &&value === "Bank" && setDisplayScreen("Heater kit");
            }
            value === "Bank" && setIsBank((state) => !state);
          }}
        ></div>
      </div>
    </div>
  );
};

export default ControlSwitch;
