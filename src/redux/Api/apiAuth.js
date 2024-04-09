import axios from 'axios';

axios.defaults.baseURL = 'https://water-backend-4k0b.onrender.com';

export const setTokenApi = (token) => {
  // console.log('setTokenApiLOOOO =>', token);
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

export const currentApi = async (email) => {
  const { data } = await axios.get('/api/users/current', {
    headers: {
      email: email,
    },
  });
  return data;
};

export const updateAvatarApi = async (avatar) => {
  const { data } = await axios.patch('/api/users/avatars', avatar, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export const changeUserDataApi = async (body) => {
  const { data } = await axios.patch('/api/users', body);
  return data;
};

export const loginOutApi = async () => {
  await axios.post('/api/auth/signout', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const updateWaterRateApi = async (waterRate) => {
  if (!axios.defaults.headers.common.Authorization) {
    throw new Error('User is not authorized');
  }
  const { data } = await axios.patch('/api/users/waterrate', { waterRate: waterRate * 1000 });
  return data;
};
