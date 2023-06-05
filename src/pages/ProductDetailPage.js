import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const ProductDetailPage = ({ products }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const history = useHistory();

  const navToBack = () => {
    //history.push("/products");
    history.goBack();
    
  };

  useEffect(() => {
    const p = products.filter((p) => p.id === productId);
    if (p.length > 0) {
      setProduct(p[0]);
    }
  }, [products, productId]);

  return (
    <div>
      <h1>
        <button onClick={navToBack} className={product.id == "15" ? "ozel-class" : "normal-class"}> {"<"} </button>
        Product Detail: {product.name}
      </h1>
      <hr />
      <img src={product.img} />
      <p>{product.description}</p>
      <p>
        <strong> {product.price}</strong>
      </p>
    </div>
  );
};

export default ProductDetailPage;
