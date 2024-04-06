import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addWaterApi,
  changeWaterApi,
  delWaterApi,
  getWaterApi,
  getWaterMonthApi,
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
      // const date = getState().water.selectDay;
      setTokenApi(getState().auth.token);
      return await getWaterSelectDayApi(date);
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const getWaterMonthThunk = createAsyncThunk(
  'waterAmount/getWaterMonth',
  async (date, { rejectWithValue, getState }) => {
    try {
      setTokenApi(getState().auth.token);
      return await getWaterMonthApi(date);
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

export const changeWaterThunk = createAsyncThunk(
  'waterAmount/changeWater',
  async (body, { rejectWithValue, getState }) => {
    try {
      console.log('changeWaterThunk:', body);
      setTokenApi(getState().auth.token);
      return await changeWaterApi(body);
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
