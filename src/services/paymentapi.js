import axios from "axios";

const api = axios.create({
    // baseURL: 'https://dev.farizdotid.com/api/',
    baseURL: 'http://localhost:8080/api/merchant'
  });

  export default api;