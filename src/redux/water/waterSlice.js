import { createSlice } from '@reduxjs/toolkit';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../auth/handlers';
import {
  handleAddContact,
  handleDelContact,
  handleGetContact,
} from './contactsHandlers';
import {
  addContactThunk,
  delContactThunk,
  getContactThunk,
} from './contactsThunk';
const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContactThunk.fulfilled, handleGetContact)
      .addCase(addContactThunk.fulfilled, handleAddContact)
      .addCase(delContactThunk.fulfilled, handleDelContact)
      .addMatcher(({ type }) => type.endsWith('/pendihg'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const contactsReduser = contactsSlice.reducer;
