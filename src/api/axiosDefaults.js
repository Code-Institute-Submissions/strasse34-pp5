import axios from "axios";

axios.defaults.baseURL = "https://rr-drf-api-d27ae746a106.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
