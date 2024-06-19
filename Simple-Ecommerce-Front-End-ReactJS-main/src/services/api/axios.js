import axios from "axios";
const axiosClient = axios.create({
  baseURL: "http://192.168.1.5:8000",
  timeout: 60000,
  withCredentials: true,
  xsrfCookieName: "XSRF-TOKEN",
  withXSRFToken: true,
  xsrfHeaderName: "X-XSRF-TOKEN",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
axiosClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }

  return config;
});

export { axiosClient };
// axios.defaults.withCredentials = true;
// axios.defaults.withXSRFToken = true;
