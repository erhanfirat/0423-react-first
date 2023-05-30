import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="counter-component">
      <CounterDisplay counter={counter} />
      <button
        onClick={() => {
          if (counter !== 0) {
            setCounter(counter - 1);
          }
        }}
      >
        Azalt
      </button>
      <button onClick={() => setCounter(counter + 1)}>Arttır</button>
    </div>
  );
};

export default Counter;
