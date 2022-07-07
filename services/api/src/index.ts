import axios from "axios";

import {
  HelloApiResponse,
  HelloMessage,
  getHelloMessage,
  mapHelloMessage,
} from "./hello";

export const clientApi = axios.create({
  baseURL: `http://localhost:5000`,
  headers: { "Content-Type": "application/json" },
  timeout: 10 * 1000,
  validateStatus: (status: number) => status >= 200 && status < 300,
});

export { HelloApiResponse, HelloMessage, getHelloMessage, mapHelloMessage };
