import "./CounterDisplay.css";

const CounterDisplay = ({ counter = 0 }) => {
  return (
    <div className="counter-display">
      <span>Sayaç: </span>
      <span>{counter}</span>
    </div>
  );
};

export default CounterDisplay;
