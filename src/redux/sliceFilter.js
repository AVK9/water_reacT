import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterWaterAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { filterWaterAction } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;
