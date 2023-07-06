import { useEffect, useState } from "react";
import { Input } from "reactstrap";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import { useDispatch, useSelector } from "react-redux";
import { getProductsActionCreator } from "../store/actionCreator/actionCreator";

// Props Drilling:
const ProductPage = () => {
  const [filterText, setFilterText] = useState("");

  const dispatch = useDispatch();
  const products = useSelector((store) => store.product.products);

  // Component did mount
  useEffect(() => {
    console.log("Product Page Yüklendi!");
    dispatch(getProductsActionCreator());

    // Component will unmount
    return () => {
      console.log("Prduct Page Silindi!");
    };
  }, []);

  // component did update
  useEffect(() => {
    console.log("ProductPage güncellendi!");
  });

  return (
    <div>
      <Title>Products Page</Title>
      <hr />
      <Input
        type="text"
        data-cy="product-filter-input"
        onChange={(e) => {
          setFilterText(e.target.value);
        }}
      />

      {products
        .filter((p) => p.name.toLowerCase().includes(filterText.toLowerCase()))
        .map((product) => {
          return (
            <div key={product.id} className="product-item">
              <img src={product.img} />
              <h3 data-cy="product-name-h3">{product.name}</h3>
              <p>{product.description}</p>
              <span>{product.price}</span>
              <Link to={`/product-detail/${product.id}`}>İncele</Link>
            </div>
          );
        })}
    </div>
  );
};

export default ProductPage;
