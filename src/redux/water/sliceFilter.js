import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: "",
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterContactAction: (state, { payload }) => {
              state.filter = payload
        }
    }
})

export const { filterContactAction} = filterSlice.actions
export const filterReduser = filterSlice.reducer
