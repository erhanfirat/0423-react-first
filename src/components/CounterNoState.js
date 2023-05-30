const CounterNoState = () => {
  let counter = 0; // local variable

  return (
    <div className="counter-nostate-component">
      <button
        onClick={() => {
          counter--;
          console.log("coutner no state > counter: ", counter);
        }}
      >
        Azalt
      </button>
      Counter: {counter}
      <button
        onClick={() => {
          counter++;
          console.log("coutner no state > counter: ", counter);
        }}
      >
        Arttır
      </button>
    </div>
  );
};

export default CounterNoState;
