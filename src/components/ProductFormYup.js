import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Button, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import * as Yup from "yup";

const ProductFormYup = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    img: "",
    price: 0,
    stock: 0,
    shippingFree: false,
  });
  const [productErrs, setProductErrs] = useState({
    name: "",
    description: "",
    img: "",
    price: "",
    stock: "",
    shippingFree: "",
  });
  const [valid, setValid] = useState(false);

  const productFormSchema = Yup.object().shape({
    name: Yup.string().required("Ürün ismi boş bırakılamaz!"),
    description: Yup.string().min(
      20,
      "Lütfen en az 20 karakterlik açıklama bilgisi ekleyin."
    ),
    img: Yup.string()
      .required("Lütfen ürün resmini ekleyiniz!")
      .url("Lütfen URL adresinin doğru yazıldığından emin olunuz!"),
    price: Yup.number().min(0, "Ürün fiyatı 0'dan az olamaz!"),
    stock: Yup.number().min(0, "Ürün stok adedi 0'dan az olamaz!"),
    shippingFree: Yup.boolean(),
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

    Yup.reach(productFormSchema, name)
      .validate(value)
      .then((valid) => {
        setProductErrs({ ...productErrs, [name]: "" });
      })
      .catch((err) => {
        setProductErrs({ ...productErrs, [name]: err.errors[0] });
      });

    setProduct({ ...product, [name]: value });
  };

  const inputCheckboxHandler = (e) => {
    const { name, checked } = e.target;

    setProduct({ ...product, [name]: checked });
  };

  useEffect(() => {
    productFormSchema.isValid(product).then((vld) => setValid(vld));
  }, [product]);

  useEffect(() => {
    console.log("productErrs: ", productErrs);
  }, [productErrs]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <FormGroup>
          <Label for="user-mail">Product Name:</Label>
          <Input
            type="text"
            name="name"
            id="name"
            onChange={inputChangeHandler}
            value={product.name}
            invalid={!!productErrs.name}
          />
          <FormFeedback>{productErrs.name}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="description">Product description:</Label>
          <Input
            type="text"
            name="description"
            id="description"
            onChange={inputChangeHandler}
            value={product.description}
            invalid={!!productErrs.description}
          />
          <FormFeedback>{productErrs.description}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="img">Product img:</Label>
          <Input
            type="url"
            name="img"
            id="img"
            onChange={inputChangeHandler}
            value={product.img}
            invalid={!!productErrs.img}
          />
          <FormFeedback>{productErrs.img}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="price">Product price:</Label>
          <Input
            type="number"
            name="price"
            id="price"
            onChange={inputChangeHandler}
            value={product.price}
            invalid={!!productErrs.price}
          />
          <FormFeedback>{productErrs.price}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="stock">Product stock:</Label>
          <Input
            type="number"
            name="stock"
            id="stock"
            onChange={inputChangeHandler}
            value={product.stock}
            invalid={!!productErrs.stock}
          />
          <FormFeedback>{productErrs.stock}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="shippingFree">Shipping Free:</Label>
          <Input
            type="checkbox"
            name="shippingFree"
            id="shippingFree"
            onChange={inputCheckboxHandler}
            checked={product.shippingFree}
            invalid={!!productErrs.shippingFree}
          />
          <FormFeedback>{productErrs.shippingFree}</FormFeedback>
        </FormGroup>

        <Button type="submit" disabled={!valid}>
          Create
        </Button>
      </form>
    </div>
  );
};

export default ProductFormYup;
