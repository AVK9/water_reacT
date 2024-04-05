import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginApi,
  loginOutApi,
  refreshApi,
  setTokenApi,
  signUpApi,
} from '../Api/apiAuth';

import { api } from '../Api/api';

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (body, { rejectWithValue }) => {
    try {
      return await signUpApi(body);
    } catch (message) {
      return rejectWithValue(message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      return await loginApi(body);
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    try {
      return await refreshApi(getState().auth.token);
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const loginOutThunk = createAsyncThunk(
  'auth/loginOut',
  async (_, { rejectWithValue, getState }) => {
    try {
      setTokenApi(getState().auth.token);
      await loginOutApi();
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const UpdateAvatarThunk = createAsyncThunk(
  'auth/avatar',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await api.patch('/users/avatars', userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
