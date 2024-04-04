import axios from 'axios';

axios.defaults.baseURL = 'https://water-backend-4k0b.onrender.com';

export const setTokenApi = (token) => {
  console.log('setTokenApi =>', token);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const addWaterApi = async (body) => {
  console.log(body);

  const { data } = await axios.post('/api/water', body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

export const getWaterApi = async () => {
  const { data } = await axios.get('/api/water/today', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};
export const getWaterSelectDayApi = async (body) => {
  console.log('bodybody', body);
  const { data } = await axios.get('/api/water/date', body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

export const delWaterApi = async (delId) => {
  const { data } = await axios.delete(`/api/water/${delId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

// export const getWaterApi = async () => {
//   console.log(api());
//   const { data } = await api('/today');
//   return data;
// };

// export const addWaterApi = async (body, token) => {
//   console.log('body =>', body);
//   console.log('token =>', token);
//   const { data } = await api.post('/api/water', body, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   console.log(data);
//   return data;
// };

// export const addWaters = async (newWater) => {
//   const { data } = await axios.post('/water', newWater, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return data;
// };
