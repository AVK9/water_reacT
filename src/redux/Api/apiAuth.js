import axios from 'axios';

axios.defaults.baseURL = 'https://water-backend-4k0b.onrender.com';

export const setTokenApi = (token) => {
  console.log('setTokenApiLOOOO =>', token);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const signUpApi = async (body) => {
  const { data } = await axios.post('/api/auth/signup', body);
  return data;
};

export const loginApi = async (body) => {
  const { data } = await axios.post('/api/auth/signin', body);
  return data;
};
export const refreshApi = async (token) => {
  const { data } = await axios('/users/current', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const loginOutApi = async () => {
  await axios.post('/api/auth/signout', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
