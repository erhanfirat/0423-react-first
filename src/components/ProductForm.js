import axios from "axios";
import { useState } from "react";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    img: "",
    price: 0,
    stock: 0,
    shippingFree: false,
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

  const inputCheckboxHandler = (e) => {
    const { name, checked } = e.target;

    setProduct({ ...product, [name]: checked });
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

        <label htmlFor="shippingFree">Shipping Free: </label>
        <input
          type="checkbox"
          name="shippingFree"
          id="shippingFree"
          onChange={inputCheckboxHandler}
          value={product.shippingFree}
        />
        <br />

        <input
          type="radio"
          id="html"
          name="fav_language_2"
          value="HTML"
          onChange={inputChangeHandler}
        />
        <label for="html">HTML</label>
        <br />
        <input
          type="radio"
          id="css"
          name="fav_language_2"
          value="CSS"
          onChange={inputChangeHandler}
        />
        <label for="css">CSS</label>
        <br />
        <input
          type="radio"
          id="javascript"
          name="fav_language_2"
          value="JavaScript"
          onChange={inputChangeHandler}
        />
        <label for="javascript">JavaScript</label>
        <br />

        <label for="cars">Choose a car:</label>
        <select name="cars" id="cars" onChange={inputChangeHandler}>
          <option disabled selected hidden>
            Select Car
          </option>
          <option value="volvo">Volvo</option>
          <option value="saab value">Saab</option>
          <option>Opel Label</option>
          <option value="audi 1">Audi</option>
        </select>
        <br></br>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ProductForm;
