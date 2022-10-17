import axios from "axios";

const AUTH_TOKEN = localStorage.getItem("@kenziehub__token");

const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;

export default api;
