import React from "react";

const ControlSlider = ({volume,setVolume,isPoweredOn,setDisplayScreen}) => {

  

  return <input
  id="slider"
  type="range"
  min={0}
  max={1}
  step={0.01}
  value={volume}
  onChange={(e)=>{isPoweredOn && setVolume(e.currentTarget.valueAsNumber) ;setDisplayScreen(`Volume is ${volume*100}`)} }
  />;
};

export default ControlSlider;
