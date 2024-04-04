import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addWaterApi,
  delWaterApi,
  getWaterApi,
  getWaterSelectDayApi,
  setTokenApi,
} from '../Api/apiWater.js';

export const getWaterThunk = createAsyncThunk(
  'waterAmount/getWater',
  async (_, { rejectWithValue, getState }) => {
    try {
      setTokenApi(getState().auth.token);
      return await getWaterApi();
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
export const getWaterDayThunk = createAsyncThunk(
  'waterAmount/getWaterDay',
  async (date, { rejectWithValue, getState }) => {
    try {
      setTokenApi(getState().auth.token);
      return await getWaterSelectDayApi(date);
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
export const addWaterThunk = createAsyncThunk(
  'waterAmount/addWater',
  async (waterAmount, { rejectWithValue, getState }) => {
    try {
      setTokenApi(getState().auth.token);
      return await addWaterApi(waterAmount);
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const delWaterThunk = createAsyncThunk(
  'waterAmount/delWater',
  async (delId, { rejectWithValue }) => {
    try {
      const data = await delWaterApi(delId);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
