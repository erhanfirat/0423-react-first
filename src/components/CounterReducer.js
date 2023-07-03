import { useEffect, useReducer, useState } from "react";
import CounterDisplay from "./CounterDisplay";

const counterInitial = 0;

const counterReducer = (state, action) => {
  switch (action.type) {
    case "ARTTIR":
      if (state < 10) {
        return state + 1;
      } else {
        return state;
      }
    case "AZALT":
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    default:
      return state;
  }
};

const CounterReducer = ({ user }) => {
  const [counter, dispatchCounter] = useReducer(counterReducer, counterInitial);

  const arttir = () => {
    dispatchCounter({
      type: "ARTTIR",
    });
  };

  // Component Did Mount
  useEffect(() => {
    console.log("[useEffect] > Component Did Mount ");

    return () => {
      // Component Will Unmount!
      console.log("[useEffect return] > Component Will Unmount");
    };
  }, []);

  // useEffect(() => {
  //   // MOUNT
  //   console.log("[useEffect] > Counter Component Did Mount!");
  //   return () => {
  //     // UNMOUNT
  //     console.log("[useEffect] > Counter Component Will UnMount!");
  //   };
  // }, []);

  useEffect(() => {
    // UPDATE
    console.log("[useEffect] > Counter Component Did UPDATE!");
  }, [counter, user]);

  useEffect(() => {
    // UPDATE
    console.log("[useEffect] > Counter Component Did UPDATE!");
  });

  return (
    <div className="counter-component">
      counter:
      <CounterDisplay counter={counter} />
      <button
        onClick={() => {
          dispatchCounter({ type: "AZALT" });
        }}
      >
        Azalt
      </button>
      <button onClick={arttir}>Arttır</button>
    </div>
  );
};

export default CounterReducer;
