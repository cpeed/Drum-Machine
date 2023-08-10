import { LiaFreeCodeCamp } from "react-icons/lia";
import "./App.css";
import sounds from "./assets/sounds.json";
import Button from "./components/Button";
import ControlSwitch from "./components/ControlSwitch";
import ControlSlider from "./components/ControlSlider";
import DisplayScreen from "./components/DisplayScreen";
import { useEffect, useState } from "react";
function App() {
  const [displayScreen, setDisplayScreen] = useState("");
  const [isBank, setIsBank] = useState(true);
  const [isPoweredOn, setIsPoweredOn] = useState(true);
  const [volume, setVolume] = useState(1);
  useEffect(() => {
    const keyListener = (e) => {
      const button = sounds[isBank ? 1 : 0].find(
        (item) => item.keyTrigger.toLowerCase() === e.key.toLowerCase()
      );

      button &&
        document.getElementById(button.id) &&
        document.getElementById(button.id).click();
        button &&document.getElementById(button.id) &&document.getElementById(button.id).focus();
    };

    window.addEventListener("keydown", keyListener);

    return () => {
      
      window.removeEventListener("keydown", keyListener);
    };
  });
  return (
    <div className="wrapper" >
      <div className="container" >
        <div className="fcc-logo">
          <p>FCC</p>
          <LiaFreeCodeCamp style={{ fontSize: "1.5rem" }} />
        </div>
        <div className="buttons-area" id="drum-machine">
          {sounds[isBank ? 1 : 0].map((i) => {
            return (
              <Button
                key={i.keyTrigger}
                setDisplayScreen={setDisplayScreen}
                buttonProps={i}
                isPoweredOn={isPoweredOn}
                volume={volume}
                
              />
            );
          })}
        </div>
        <div className="controls-area" >
          <ControlSwitch
            value={"Power"}
            setIsPoweredOn={setIsPoweredOn}
            setDisplayScreen={setDisplayScreen}
          />
          <DisplayScreen value={displayScreen} />
          <ControlSlider volume={volume} setVolume={setVolume} isPoweredOn={isPoweredOn} />
          <ControlSwitch
            value={"Bank"}
            setIsBank={setIsBank}
            setDisplayScreen={setDisplayScreen}
            isPoweredOn={isPoweredOn}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
