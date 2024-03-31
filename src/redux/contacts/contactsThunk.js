import { createAsyncThunk } from '@reduxjs/toolkit';
import { setTokenApi } from '../Api/apiAuth';
import {
  addContactApi,
  delContactApi,
  getContactApi,
} from '../Api/contactsApi.js';

export const getContactThunk = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue, getState }) => {
    try {
      setTokenApi(getState().auth.token);
      return await getContactApi();
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
export const addContactThunk = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await addContactApi(contact);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const delContactThunk = createAsyncThunk(
  'contacts/delContacts',
  async (delId, { rejectWithValue }) => {
    try {
      const data = await delContactApi(delId);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
