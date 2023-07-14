import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  logIn,
  logOut,
  refreshUser,
  register,
  updateUserData,
} from './operations';
import {
  handleLoginFulfilled,
  handleLogoutFulfilled,
  handleRefreshFulfilled,
  handleRefreshPending,
  handleRefreshReject,
  handleRegisterFulfilled,
  handleReject,
  handleUpdateFulfilled,
} from './actions';

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleRegisterFulfilled)
      .addCase(register.rejected, handleReject)
      .addCase(logIn.fulfilled, handleLoginFulfilled)
      .addCase(logIn.rejected, handleReject)
      .addCase(logOut.fulfilled, handleLogoutFulfilled)
      .addCase(refreshUser.pending, handleRefreshPending)
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addCase(refreshUser.rejected, handleRefreshReject)
      .addCase(updateUserData.pending, handleRefreshPending)
      .addCase(updateUserData.fulfilled, handleUpdateFulfilled)
      .addCase(updateUserData.rejected, handleRefreshReject);
  },
});

export const authReducer = authSlice.reducer;
