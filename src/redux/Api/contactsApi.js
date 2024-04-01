import { api } from './api';

export const getContactApi = async () => {
  const { data } = await api('/contacts');
  return data;
};

export const addContactApi = async (contact) => {
  const { data } = await api.post('/contacts', contact);
  console.log(data);
  return data;
};

export const delContactApi = async (delId) => {
  const { data } = await api.delete(`/contacts/${delId}`);
  return data;
};
