import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import createHeader from './createHeader';

const baseURL = process.env.API_BASE_URL || ('http://localhost:5454' as string);
const isDummy = baseURL === undefined;

export const axiosConfigWithAuthToken = async (): Promise<
  AxiosRequestConfig
> => {
  const options = await createHeader();
  return { headers: options.headers };
};

export const axiosConfig = (
  dummyResponse?: () => AxiosResponse,
  sleep?: number,
  forceMock?: boolean | string,
  config: AxiosRequestConfig = axios.defaults,
) => {
  if ((forceMock === undefined || forceMock) && dummyResponse) {
    const { adapter, ...rest } = config;
    const finalConfig: AxiosRequestConfig = {
      ...rest,
      adapter: customAdapter(dummyResponse, sleep),
    };
    return finalConfig;
  }
  return config;
};

function customAdapter(dummyResponse: () => AxiosResponse, sleep?: number) {
  return config => {
    return new Promise<AxiosResponse>((resolve, reject) => {
      if (sleep) {
        delay(sleep).then(() => {
          resolve(dummyResponse());
        });
      } else {
        resolve(dummyResponse());
      }
    });
  };
}

const delay = t => new Promise(resolve => setTimeout(resolve, t));

export default axios.create({
  baseURL,
  // timeout: 1000,
});
