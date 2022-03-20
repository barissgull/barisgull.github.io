import axios from 'axios';
import { postWithFormData } from '../../../utils/http';

export const signup = (user) =>
  axios.post(process.env.BASE_URL + 'auth/sign-up', user).then((resp) => {
    return resp.data;
  });

export const authorizeInstagram = (data) => {
  console.log(data, 'dataa');
  postWithFormData('https://api.instagram.com/oauth/access_token', data).then((resp) => {
    return resp.data;
  });
};
