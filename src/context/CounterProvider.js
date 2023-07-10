import axios from "axios";
import { createContext, useReducer, useState } from "react";

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(1111);
  const [increment, setIncrement] = useState(1);
  const [products, setProducts] = useState([]);
  const PI = 3.1415;

  const getProducts = () => {
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  };

  const counterGuncelle = (val) => {
    if (val < 1200) {
      console.log("counter eski değer: ", counter);
      setCounter(val);
      console.log("counter yeni değer: ", val);
    }
  };

  return (
    <CounterContext.Provider
      value={{
        counter,
        setCounter,
        counterGuncelle,
        increment,
        setIncrement,
        getProducts,
        products,
        PI,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
