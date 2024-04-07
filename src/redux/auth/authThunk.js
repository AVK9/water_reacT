import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginApi,
  loginOutApi,
  currentApi,
  setTokenApi,
  signUpApi,
  UpdateAvatar,
  updateWaterRateApi,
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

export const currentThunk = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      if (token) {
        setTokenApi(token);

        return await currentApi(getState().auth.profile.email);
      }
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
  'auth/updateAvatar',
  async (newPhotoFile, { rejectWithValue }) => {
    try {
      const AvatarUrl = await UpdateAvatar(newPhotoFile);
      return AvatarUrl;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const changeUserData = createAsyncThunk(
  'auth/changeUserData',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await api.patch('/users', user);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const updateWaterRateThunk = createAsyncThunk(
  'auth/updateWaterRate',
  async (waterRate, { rejectWithValue, getState }) => {
    try {
      setTokenApi(getState().auth.token);
      const data = await updateWaterRateApi(waterRate);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
