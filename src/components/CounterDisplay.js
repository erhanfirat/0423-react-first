import { useEffect } from "react";
import "./CounterDisplay.css";

const CounterDisplay = ({ counter = 0 }) => {
  // useEffect(() => {
  //   console.log("[useEffect] > CounterDisplay Component Did UPDATE!");
  // });

  return (
    <div className="counter-display">
      <span>Sayaç: </span>
      <span>{counter}</span>
    </div>
  );
};

export default CounterDisplay;
