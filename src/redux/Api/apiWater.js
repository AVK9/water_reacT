import axios from 'axios';

axios.defaults.baseURL = 'https://water-backend-4k0b.onrender.com';

export const setTokenApi = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const addWaterApi = async (body) => {
  const { data } = await axios.post('/api/water/add', body, {
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
  const { data } = await axios.get(`/api/water/today?date=${body}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};
// export const getWaterSelectDayApi = async (body) => {
//   try {
//     console.log('bodybody', body);
//     const { data } = await axios.get(`/api/water/today?date=${body}`, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     return data;
//   } catch (error) {
//     console.error('Виникла помилка при виконанні запиту:', error);
//   }
// };

// export const getWaterMonthApi = async (body) => {
//   if (body) {
//     const { data } = await axios.get(`/api/water/month?date=${body}`, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     return data;
//   }
//   return;
// };
export const getWaterMonthApi = async ({ start, end }) => {
  const { data } = await axios.get(
    `/api/water/month?start=${start}&end=${end}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return data;
};

export const delWaterApi = async ({ _id }) => {
  const { data } = await axios.delete(`/api/water/remove/${_id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

export const changeWaterApi = async ({ _id, waterAmount, date }) => {
  const { data } = await axios.put(
    `/api/water/update/${_id}`,
    { waterAmount, date },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return data;
};
