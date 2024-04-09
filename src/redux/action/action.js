import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stateHandleDate: null,
};

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    updateStateHandleDate: (state, action) => {
      state.stateHandleDate = action.payload;
    },
  },
});

export const { updateStateHandleDate } = timeSlice.actions;

export const timeReduser = timeSlice.reducer;
