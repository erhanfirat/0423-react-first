import MainLayout from "./layout/MainLayout";

import "./App.css";

function App() {
  const userName = "Ali";
  const userAge = 19;

  return (
    <div className="App">
      <MainLayout userName={userName} userAge={userAge} />
    </div>
  );
}

export default App;

export const PI = 3.14159267;
export const User = { name: "ali" };
