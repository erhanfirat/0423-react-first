import MainLayout, { userFormInitial } from "./layout/MainLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "reactstrap";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { eachWeekOfInterval, formatISO } from "date-fns";

console.log("userFormInitial: ", userFormInitial);

function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({
    name: "ali",
    email: "",
    age: 19,
  });

  const dateISO = formatISO(new Date());

  const weekMs = 7 * 24 * 60 * 60 * 1000;
  const startDateMs = new Date(2023, 5, 20).getTime();

  for (let i = 0; i < 5; i++) {
    console.log(new Date(startDateMs + i * weekMs));
  }

  // rerender

  useEffect(() => {
    console.log("[useEffect] > Application Did Mount!");
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        // başarı
        setProducts(res.data);
        toast.success("Product dataları yüklendi!");
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
      {dateISO}
      <Button onClick={() => setUser({ name: "", age: 0, email: "" })}>
        Reset User
      </Button>
      <MainLayout user={user} products={products} />
      <ToastContainer />
    </div>
  );
}

export default App;

export const PI = 3.14159267;
export const User = { name: "ali" };
