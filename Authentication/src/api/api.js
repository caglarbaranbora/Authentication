import axios from 'axios';

const instance = axios.create({
  baseURL: 'Your EndPoint'});

export const loginApi = (username, password) => {
  return instance.post(`${baseURL}/login`, { email: username, password });// `${BASE_URL}/register` belongs to your database you can use '/someting' from your db 
};
