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
  const { data } = await clientApi.get<HelloApiResponse>("/");

  return mapHelloMessage(data);
};
