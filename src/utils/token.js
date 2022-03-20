import Cookies from 'universal-cookie';

const tokenKey = 'token';

const setToken = (cookies, token) => {
  cookies.set(tokenKey, token);
};

export const setTokenToCookie = (token) => {
  const cookies = new Cookies();
  setToken(cookies, token);
};

export const getTokenFromCookie = () => {
  const cookies = new Cookies();

  return cookies.get(tokenKey);
};

export const removeTokenFromCookie = () => {
  const cookies = new Cookies();
  return cookies.remove(tokenKey);
};
