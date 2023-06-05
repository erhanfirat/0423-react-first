import { useEffect } from "react";
import "./CounterDisplay.css";

const CounterDisplay = ({ counter = 0, color = "#ccc" }) => {
  // useEffect(() => {
  //   console.log("[useEffect] > CounterDisplay Component Did UPDATE!");
  // });

  return (
    <div className="counter-display" style={{ bgColor: color }}>
      <span>Sayaç: </span>
      <span>{counter}</span>
    </div>
  );
};

export default CounterDisplay;
