import axios from 'axios';
import oauth from 'axios-oauth-client';

export const getAuthorizationCode = oauth.client(axios.create(), {
  url: 'https://api.instagram.com/oauth/access_token',
  grant_type: 'authorization_code',
  client_id: '314427167338489',
  client_secret: '5df593f82d872587e9502cce87889dc2',
  redirect_uri: 'https://barissgull.github.io/instagram-auth',
  code: 'AQCfAJPNddptBd_-9gLsIecqiw9VsUtbbL0EDSQlfchMnm5lheOFHoJ87ptehSbXOG8o5XI_fDjKguS-HZsNRu1G_zMsyD4dbRtvDFJ7SgZWgspQXF92asS3gdwn2GZZw11P3RPqitb1eHO30BCIrRmiqqidPTbCYVTNd_tmDzsGN1iP9k23AViQi_CniclNEo3I0zcKI9pKUQmmXzpfWNaZzyrTfI5noEXgfa5x53HDRg',
});

const getHeaders = () => {
  const lang = localStorage.getItem('i18nextLng');

  return {
    ...{ 'Access-Control-Allow-Origin': '*' },
    ...{ 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' },
    ...(lang && { 'Accept-Language': lang }),
  };
};

export const request = (
  method = 'GET',
  uri,
  body,
  headers,
  formData,
  blob = false,
  handleUploadProgress,
  fileServer = false
) =>
  axios({
    baseURL: fileServer ? process.env.FILE_SERVER_URL : process.env.BASE_URL,
    method,
    withCredentials: true,
    url: uri,
    data: body ? JSON.stringify(body) : formData,
    headers: { ...getHeaders(), ...headers },
    responseType: blob ? 'blob' : 'jsonp',
    onUploadProgress: handleUploadProgress || (() => {}),
  })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
export const get = (uri) => request('GET', uri, null, { 'Content-Type': 'application/json' });

export const post = (uri, body) => request('POST', uri, body, { 'Content-Type': 'application/json' });

export const postWithFormData = (uri, formData) =>
  request('POST', uri, null, { 'Content-Type': 'application/json' }, formData);

export const put = (uri, body) => request('PUT', uri, body, { 'Content-Type': 'application/json' });

export const del = (uri) => request('DELETE', uri, null, { 'Content-Type': 'application/json' });



