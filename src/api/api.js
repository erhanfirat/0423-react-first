import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    // Create Axios Instance
    baseURL: "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/",
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
          CustomHeader: "lay lay",
        }
      : {},
  });
};

export let API = axiosWithAuth();

export const updateToken = (token) => {
  localStorage.setItem("token", token);
  API = axiosWithAuth();
};
