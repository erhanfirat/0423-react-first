import axios from "axios";
import { useState } from "react";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    img: "",
    price: 0,
    stock: 0,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("product: ", product);
    axios.post(
      "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products",
      product
    );
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setProduct({ ...product, [name]: value });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Product Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={inputChangeHandler}
          value={product.name}
        />
        <br />
        <label htmlFor="description">Product description: </label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={inputChangeHandler}
          value={product.description}
        />
        <br />
        <label htmlFor="img">Product img: </label>
        <input
          type="url"
          name="img"
          id="img"
          onChange={inputChangeHandler}
          value={product.img}
        />
        <br />
        <label htmlFor="price">Product price: </label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={inputChangeHandler}
          value={product.price}
        />
        <br />
        <label htmlFor="stock">Product stock: </label>
        <input
          type="number"
          name="stock"
          id="stock"
          onChange={inputChangeHandler}
          value={product.stock}
        />
        <br />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ProductForm;
