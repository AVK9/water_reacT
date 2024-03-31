import { api } from './api';

export const getWaterApi = async () => {
  console.log(api());
  const { data } = await api('/');
  return data;
};

getWaterApi();
export const addWaterApi = async (body) => {
  const { data } = await api.post('/???', body);
  console.log(data);
  return data;
};

export const delWaterApi = async (delId) => {
  const { data } = await api.delete(`/???/${delId}`);
  return data;
};
