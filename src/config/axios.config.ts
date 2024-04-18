import axios from "axios";

// URL base
const BASE_URL = "http://localhost:8080/";

// Instancia con autorización
const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Instancia para multipart/form-data
const axiosFormData = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    "Content-Type": "multipart/form-data",
  },
});

export { axiosAuth, axiosFormData };
