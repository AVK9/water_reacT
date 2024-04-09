import { createSlice } from '@reduxjs/toolkit';
import {
  loginOutThunk,
  loginThunk,
  currentThunk,
  signUpThunk,
} from './authThunk';
import {
  handleFulfilled,
  handleLoginOut,
  handlePending,
  handleCurrent,
  handleRejected,
  handleSignUp,
  handleLogin,
} from './handlers';
const initialState = {
  isLoading: false,
  error: '',
  token: '',
  profile: {
    email: null,
    userName: null,
    avatarURL: '',
    gender: '',
    waterRate: 0,
  },
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.fulfilled, handleSignUp)
      .addCase(loginThunk.fulfilled, handleLogin)
      .addCase(currentThunk.fulfilled, handleCurrent)
      .addCase(currentThunk.rejected, (state) => {
        state.token = '';
        state.profile = {
          email: null,
          userName: null,
          avatarURL: '',
          gender: '',
          waterRate: 0,
        };
        // localStorage.clear()
      })

      .addCase(loginOutThunk.fulfilled, handleLoginOut)

      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const authReduser = authSlice.reducer;
