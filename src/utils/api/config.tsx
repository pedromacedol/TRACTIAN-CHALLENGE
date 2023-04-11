import axios from "axios";

const url = "https://my-json-server.typicode.com/tractian/fake-api";

export const TractianAPI = axios.create({
  baseURL: url,
});
