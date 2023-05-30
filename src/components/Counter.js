import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="counter-component">
      <button
        onClick={() => {
          if (counter !== 0) {
            setCounter(counter - 1);
          }
        }}
      >
        Azalt
      </button>
      Counter: {counter}
      <button onClick={() => setCounter(counter + 1)}>Arttır</button>
    </div>
  );
};

export default Counter;
