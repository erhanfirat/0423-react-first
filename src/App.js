import MainLayout, { userFormInitial } from "./layout/MainLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "reactstrap";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

console.log("userFormInitial: ", userFormInitial);

function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({
    name: "ali",
    email: "",
    age: 19,
  });

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
