import { useState } from "react";
import { API } from "./api";
import { toast } from "react-toastify";

export const REQ_TYPES = Object.freeze({
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
});

// single source of truth

export const useAxios = (initialValue = null) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const doRequest = (reqType, endpoint, payload, config) => {
    setLoading(true);

    return API[reqType](endpoint, payload, config) // creates Promise Object
      .then((res) => {
        setData(res.data);
        setError(null);
        return res.data;
      })
      .catch((err) => {
        setError(err);
        setData(initialValue);
        toast.error(err.message);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  return [doRequest, data, loading, error];
};
