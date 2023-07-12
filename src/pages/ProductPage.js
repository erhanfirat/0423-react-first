import { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import { useDispatch, useSelector } from "react-redux";
import { getProductsActionCreator } from "../store/actionCreator/actionCreator";
import { REQ_TYPES, useAxios } from "../api/useAxios";

// Props Drilling:
const ProductPage = () => {
  const [filterText, setFilterText] = useState("");
  //return [doRequest, data, loading, error];
  const [getProducts, products, loading] = useAxios([]);
  const [delProduct, delProductData, delLoading, delError] = useAxios();

  // Component did mount
  useEffect(() => {
    console.log("Product Page Yüklendi!");

    getProducts(REQ_TYPES.GET, "/products");
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

      {loading ? (
        <span>Loading...</span>
      ) : (
        products
          .filter((p) =>
            p.name.toLowerCase().includes(filterText.toLowerCase())
          )
          .map((product) => {
            return (
              <div key={product.id} className="product-item">
                <img src={product.img} />
                <h3 data-cy="product-name-h3">{product.name}</h3>
                <p>{product.description}</p>
                <span>{product.price}</span>
                <Link
                  className="btn btn-primary"
                  to={`/product-detail/${product.id}`}
                >
                  İncele
                </Link>
                <Link
                  className="btn btn-primary"
                  to={`/edit-product/${product.id}`}
                >
                  Düzenle
                </Link>
                <Button
                  color="danger"
                  onClick={() => {
                    delProduct(
                      REQ_TYPES.DELETE,
                      `/products/${product.id}`
                    ).then((data) => {
                      getProducts(REQ_TYPES.GET, "/products");
                    });
                  }}
                >
                  Delete
                </Button>
              </div>
            );
          })
      )}
    </div>
  );
};

export default ProductPage;
