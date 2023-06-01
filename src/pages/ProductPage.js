import { useState } from "react";
import { Input } from "reactstrap";
import Title from "../components/Title";

const ProductPage = ({ products }) => {
  const [filterText, setFilterText] = useState("");

  return (
    <div>
      <Title>Products Page</Title>
      <hr />
      <Input
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
