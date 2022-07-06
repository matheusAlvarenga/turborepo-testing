import { clientApi } from "..";

export type HelloApiResponse = {
  text: string;
};

export type HelloMessage = {
  message: string;
};

export const mapHelloMessage = (data: HelloApiResponse): HelloMessage => {
  return {
    message: data.text,
  };
};

export const getHelloMessage = async () => {
  const response: HelloApiResponse = await clientApi.get("/");

  return mapHelloMessage(response);
};
