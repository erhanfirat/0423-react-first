import { useContext } from "react";
import { CounterContext } from "../context/CounterProvider";

const CardContainer = (props) => {
  const { children } = props;

  const counterContext = useContext(CounterContext);

  return (
    <div className="card-container">
      context içindeki counter değeri: {counterContext.counter}
      <button
        type="button"
        onClick={() => {
          counterContext.setCounter(counterContext.counter + 1);
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          counterContext.setCounter(counterContext.counter - 1);
        }}
      >
        -
      </button>
      <br />
      <hr />
      <h2>Products</h2>
      <button
        onClick={() => {
          counterContext.getProducts();
        }}
      >
        Get Products
      </button>
      <br />
      <p>Ürün Sayısı: {counterContext.products.length} </p>
      {children}
    </div>
  );
};

export default CardContainer;
