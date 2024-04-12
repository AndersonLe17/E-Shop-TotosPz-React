import axios, { HttpStatusCode } from "axios";

// URL base
const BASE_URL = "http://localhost:8080/";

// Instancia sin autorización
const axiosNoAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para guardar el token en localStorage
axiosNoAuth.interceptors.response.use(
  (response) => {
    if (response.status === HttpStatusCode.Ok) {
      localStorage.setItem("jwt", response.data.payload.token);
    }
    return response;
  },
  (error) => {
    if (error.response?.status === HttpStatusCode.Unauthorized) {
      localStorage.removeItem("jwt");
    }
    return Promise.reject(error);
  },
);

// Instancia con autorización
const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

// Instancia para multipart/form-data
const axiosFormData = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    "Content-Type": "multipart/form-data",
  },
});

export { axiosNoAuth, axiosAuth, axiosFormData };
