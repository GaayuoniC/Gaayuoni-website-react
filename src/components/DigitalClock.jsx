import { useState } from "react";
import "./DigitalClock.css";

export function DigitalClock() {
  //use the in built new date method to get the local time
  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  //function to keep updating the time + the set interval

  function handleTimeChange() {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }
  setInterval(handleTimeChange, 1000); //call the function and then parse the time interval

  return (
    <div className="digital-container">
      <p>Current local time : {currentTime}</p>
    </div>
  );
}
