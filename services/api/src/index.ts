import axios from "axios";

export const clientApi = axios.create({
  baseURL: `localhost:5000`,
  headers: { "Content-Type": "application/json" },
  timeout: 10 * 1000,
  validateStatus: (status: number) => status >= 200 && status < 300,
});
