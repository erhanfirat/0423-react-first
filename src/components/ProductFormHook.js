import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import * as Yup from "yup";
import { API } from "../api/api";

const ProductFormHook = ({ productInitial }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      img: "",
      price: 0,
      stock: 0,
      shippingFree: false,
    },
  });

  const submitHandler = (formData) => {
    console.log("formData: ", formData);
    // yeni ürün mü? yoksa eski ürün mü?
    // create or update?
    if (formData.id) {
      API.put(`/products/${formData.id}`, formData)
        .then((res) => {
          toast.success("Ürün başarıyla kaydedildi.");
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      API.post("/products", formData)
        .then((res) => {
          toast.success("Ürün başarıyla kaydedildi.");
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  useEffect(() => {
    if (productInitial) {
      setValue("name", productInitial.name);
      setValue("description", productInitial.description);
      setValue("img", productInitial.img);
      setValue("price", productInitial.price);
      setValue("stock", productInitial.stock);
      setValue("shippingFree", productInitial.shippingFree);
      if (productInitial.id) {
        setValue("id", productInitial.id);
      }
    }
  }, [productInitial]);

  return (
    <div>
      <h3>Form {isValid ? "valid" : "valid değil"}</h3>
      <form onSubmit={handleSubmit(submitHandler)}>
        <FormGroup>
          <Label for="user-mail">Product Name:</Label>
          <input
            type="text"
            id="name"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            {...register("name", { required: "İsim alanı boş bırakılamaz!" })}
          />
          <FormFeedback>{errors.name?.message}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="description">Product description:</Label>
          <input
            type="text"
            id="description"
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            {...register("description", {
              validate: (val) => {
                return val?.length > 10
                  ? true
                  : "10 Karakterden fazla bir açıklama giriniz.";
              },
            })}
          />
          <FormFeedback>{errors.description?.message}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="img">Product img:</Label>
          <input
            type="url"
            id="img"
            className={`form-control ${errors.img ? "is-invalid" : ""}`}
            {...register("img")}
          />
          <FormFeedback>{errors.img?.message}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="price">Product price:</Label>
          <input
            type="number"
            id="price"
            className={`form-control ${errors.price ? "is-invalid" : ""}`}
            {...register("price", {
              min: { value: 0, message: "Fiyat eksi değer alamaz!" },
              max: { value: 1000, message: "Fiyat 1000 üstü değer alamaz!" },
            })}
          />
          <FormFeedback>{errors.price?.message}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="stock">Product stock:</Label>
          <input
            type="number"
            id="stock"
            className={`form-control ${errors.stock ? "is-invalid" : ""}`}
            {...register("stock")}
          />
          <FormFeedback>{errors.stock?.message}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="shippingFree">Shipping Free:</Label>
          <input
            type="checkbox"
            id="shippingFree"
            className="form-check-input"
            {...register("shippingFree")}
          />
          <FormFeedback>{errors.shippingFree?.message}</FormFeedback>
        </FormGroup>

        <button
          type="submit"
          className={`btn ${isValid ? "btn-primary" : "btn-danger"}`}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ProductFormHook;
