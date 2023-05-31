import { useState } from "react";

const ProductPage = ({ products }) => {
  const [filterText, setFilterText] = useState("");

  return (
    <div>
      <h1>Products Page</h1>
      <hr />
      <input
        type="text"
        onChange={(e) => {
          setFilterText(e.target.value);
        }}
      />

      {products
        .filter((p) => p.name.toLowerCase().includes(filterText.toLowerCase()))
        .map((product) => {
          return (
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span>{product.price}</span>
            </div>
          );
        })}
    </div>
  );
};

export default ProductPage;
