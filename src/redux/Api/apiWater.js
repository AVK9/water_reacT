import { api } from './api';

export const getWaterApi = async () => {
  console.log(api());
  const { data } = await api('/');
  return data;
};

export const addWaterApi = async (body) => {
  console.log(body);
  const { data } = await api.post('/api/water', body);
  console.log(data);
  return data;
};

export const delWaterApi = async (delId) => {
  const { data } = await api.delete(`/???/${delId}`);
  return data;
};
