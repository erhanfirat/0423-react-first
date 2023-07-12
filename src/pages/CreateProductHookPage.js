import { useParams } from "react-router-dom";
import ProductFormHook from "../components/ProductFormHook";
import ProductFormYup from "../components/ProductFormYup";
import { useEffect } from "react";
import { API } from "../api/api";
import { REQ_TYPES, useAxios } from "../api/useAxios";

const CreateProductHookPage = () => {
  const { productId } = useParams();
  const [getProduct, product, loading, err] = useAxios({});

  useEffect(() => {
    if (productId) {
      getProduct(REQ_TYPES.GET, `/products/${productId}`);
    }
  }, [productId]);

  return (
    <div>
      <h1>Create Product with React Hook Form</h1>
      <hr />
      <ProductFormHook productInitial={product} />
    </div>
  );
};

export default CreateProductHookPage;
