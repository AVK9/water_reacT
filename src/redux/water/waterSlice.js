import { createSlice } from '@reduxjs/toolkit';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../auth/handlers';
import {
  handleAddWater,
  handleChangeWater,
  handleDelWater,
  handleGetMonthWater,
  handleGetWater,
} from './waterHandlers';
import {
  addWaterThunk,
  changeWaterThunk,
  delWaterThunk,
  getWaterDayThunk,
  getWaterMonthThunk,
  getWaterThunk,
} from './waterThunk';
const initialState = {
  month: [],
  dayWaterList: [],
  selectDay: '',
  selectMonth: '',
  isLoading: false,
  error: null,
};
const waterSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getWaterThunk.fulfilled, handleGetWater)
      .addCase(addWaterThunk.fulfilled, handleAddWater)
      .addCase(getWaterDayThunk.fulfilled, handleGetWater)
      .addCase(getWaterMonthThunk.fulfilled, handleGetMonthWater)
      .addCase(delWaterThunk.fulfilled, handleDelWater)
      .addCase(changeWaterThunk.fulfilled, handleChangeWater)
      .addMatcher(({ type }) => type.endsWith('/pendihg'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const waterReduser = waterSlice.reducer;
