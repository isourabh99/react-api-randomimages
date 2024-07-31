import axios from "axios";

const instanceOfAxios = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export default instanceOfAxios;
