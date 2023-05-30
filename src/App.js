import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import CounterNoState from "./components/CounterNoState";

function App() {
  const userName = "Ali";

  return (
    <div className="App">
      <h1>Merhaba {userName}</h1>
      <Counter></Counter>
      <CounterNoState />
    </div>
  );
}

export default App;
