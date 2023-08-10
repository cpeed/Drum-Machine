import React from "react";
import "./Button.css";
const Button = ({ setDisplayScreen, buttonProps, isPoweredOn, volume }) => {
  return (
    <button
      className="drum-pad"
      id={buttonProps.id}
      onClick={(e) => {
        if (isPoweredOn) {
          setDisplayScreen(e.currentTarget.id);

          const audio = document.getElementById(buttonProps.keyTrigger);
          audio.volume = volume;

          audio.play();
        }
      }}
    >
      {buttonProps.keyTrigger}
      <audio
        src={buttonProps.url}
        className="clip"
        id={buttonProps.keyTrigger}
      ></audio>
    </button>
  );
};

export default Button;
