import axios from 'axios';

const BASE_URL = 'Your EndPoint'; 

export const signUp = async (email, username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {email,name:  username, password});// `${BASE_URL}/register` belongs to your database you can use '/someting' from your db 
    console.log(response);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
