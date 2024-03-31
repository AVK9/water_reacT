import { createSlice } from "@reduxjs/toolkit";
import { loginOutThunk, loginThunk, refreshThunk, signUpThunk } from "./authThunk";
import { handleFulfilled, handleLoginOut, handlePending, handleRefresh, handleRejected, handleSignUp } from "./handlers";
const initialState = {
    isLoading: false,
    error: '',
    token: '',
    profile: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(signUpThunk.fulfilled, handleSignUp)
            .addCase(loginThunk.fulfilled, handleSignUp)
            .addCase(refreshThunk.fulfilled, handleRefresh)
            .addCase(refreshThunk.rejected, (state) => {
                state.token = ''
                state.profile = null
                // localStorage.clear()
            })

        .addCase(loginOutThunk.fulfilled, handleLoginOut)
            
        .addMatcher(({type}) => type.endsWith('/pendihg'), handlePending)
        .addMatcher(({type})=> type.endsWith('/fulfilled'), handleFulfilled)
        .addMatcher(({type})=> type.endsWith('/rejected'), handleRejected)
    }
})

export const authReduser = authSlice.reducer


