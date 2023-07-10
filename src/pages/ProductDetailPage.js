import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { CounterContext } from "../context/CounterProvider";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const products = useSelector((store) => store.product.products);
  const history = useHistory();
  const counterContext = useContext(CounterContext);

  const navToBack = () => {
    //history.push("/products");
    history.goBack();
  };

  useEffect(() => {
    debugger;
    const p = products.filter((p) => p.id === productId);
    if (p.length > 0) {
      setProduct(p[0]);
    }
  }, [products, productId]);

  return (
    <div>
      <h1>
        <button
          onClick={navToBack}
          className={product.id == "15" ? "ozel-class" : "normal-class"}
        >
          Back
        </button>
        Product Detail: {product.name}
      </h1>
      <hr />
      <img src={product.img} />
      <p>{product.description}</p>
      <p>
        <strong> {product.price}</strong>
      </p>
      <p>Counter: {counterContext.counter}</p>
    </div>
  );
};

export default ProductDetailPage;
