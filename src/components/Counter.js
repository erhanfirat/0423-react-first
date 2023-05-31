import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = () => {
  // UPDATE: state & prop değerlerinden herhangi biri değiştiği zaman component update(rerender) edilir!
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("[useEffect] > counter yeni değeri: ", counter);

    return () => {
      console.log("[useEffect] > counter return: ", counter);
    };
  }, [counter]);

  // useEffect(() => {
  //   // MOUNT
  //   console.log("[useEffect] > Counter Component Did Mount!");
  //   return () => {
  //     // UNMOUNT
  //     console.log("[useEffect] > Counter Component Will UnMount!");
  //   };
  // }, []);

  // useEffect(() => {
  //   // UPDATE
  //   console.log("[useEffect] > Counter Component Did UPDATE!");
  // });

  const arttir = () => {
    setCounter(counter + 1);
  };

  const randomNumber = () => {
    setCounter(Math.floor(Math.random() * 1000));
  };

  return (
    <div className="counter-component">
      counter 1:
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
      <button onClick={arttir}>Arttır</button>
      <button onClick={randomNumber}>Random</button>
    </div>
  );
};

export default Counter;
