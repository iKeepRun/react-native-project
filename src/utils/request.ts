import axios ,{ AxiosResponse }from 'axios';

import apiConfig from '../apis/Apis.ts';

const BASE_URL = 'http://172.16.181.17:7001';
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10秒超时
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    return Promise.reject(error);
  },
);

export const get = (url: string, params: any):Promise<AxiosResponse<any,any>> => {
  return instance.get(url, { params });
};
export const post = (url: string, data: any):Promise<AxiosResponse<any,any>> => {
  return instance.post(url, data);
}

export const request = (name:string,params:any):Promise<AxiosResponse<any,any>> => {
   const api =(apiConfig as  any)[name]
   const {url,method} = api
   if (method === 'get') {
     return get(url, params)
   }else{
     return post(url, params)
   }
}