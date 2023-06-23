import axios from "axios";

const defaultAxiosParams = {
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: "",
  },
  withCredentials: true,
};

export const axiosService = axios.create(defaultAxiosParams);

axiosService.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (error) {
    //error logic

    return Promise.reject(error);
  }
);

axiosService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      (error?.response?.status === 401 || error?.response?.status === 400) &&
      !originalRequest.sent &&
      originalRequest.url !== "/users"
    ) {
      originalRequest.sent = true;

      return axios(originalRequest);
    }

    console.error(error);
    return Promise.reject(error);
  }
);
