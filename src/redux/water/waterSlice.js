import { createSlice } from '@reduxjs/toolkit';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../auth/handlers';
import {
  handleAddWater,
  handleDelWater,
  handleGetWater,
} from './waterHandlers';
import {
  addWaterThunk,
  changeWaterThunk,
  delWaterThunk,
  getWaterDayThunk,
  getWaterThunk,
} from './waterThunk';
const initialState = {
  month: [],
  dayWaterList: [],
  selectDay: null,
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
      .addCase(getWaterDayThunk.fulfilled, handleAddWater)
      .addCase(delWaterThunk.fulfilled, handleDelWater)
      .addCase(changeWaterThunk.fulfilled, handleGetWater)
      .addMatcher(({ type }) => type.endsWith('/pendihg'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const waterReduser = waterSlice.reducer;
