import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginApi,
  loginOutApi,
  currentApi,
  setTokenApi,
  signUpApi,
} from '../Api/apiAuth';

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
// export const addWaterThunk = createAsyncThunk(
//   'waterAmount/addWater',
//   async (waterAmount, { rejectWithValue, getState }) => {
//     try {
//       setTokenApi(getState().auth.token);
//       return await addWaterApi(waterAmount);
//     } catch (error) {
//       return rejectWithValue(error.response.data.error);
//     }
//   }
// );
