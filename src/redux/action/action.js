import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stateHandleDate: null,
  stateHandleMonth: {},
};

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    updateStateHandleDate: (state, action) => {
      state.stateHandleDate = action.payload;
    },
    updateStateHandleMonth: (state, action) => {
      state.stateHandleMonth = action.payload;
    },
  },
});

export const { updateStateHandleDate, updateStateHandleMonth } =
  timeSlice.actions;

export const timeReduser = timeSlice.reducer;
