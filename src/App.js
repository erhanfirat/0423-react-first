import MainLayout from "./layout/MainLayout";
import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const userName = "Ali";
  const userAge = 19;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("[useEffect] > Application Did Mount!");
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        // başarı
        setProducts(res.data);
      })
      .catch((err) => {
        // hata
      })
      .finally(() => {
        //
      });
  }, []);

  useEffect(() => {
    console.log("producst > ", products);
  }, [products]);

  return (
    <div className="App">
      Selam
      <MainLayout userName={userName} userAge={userAge} products={products} />
    </div>
  );
}

export default App;

export const PI = 3.14159267;
export const User = { name: "ali" };
