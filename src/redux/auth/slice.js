import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  logIn,
  logOut,
  refreshUser,
  register,
  subscribe,
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
  handleSubscribePending,
  handleSubscribeReject,
  handleUpdateFulfilled,
} from './actions';

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    clearErrorMessage: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = '';
    },
  },

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
      .addCase(updateUserData.rejected, handleRefreshReject)
      .addCase(subscribe.pending, handleSubscribePending)
      .addCase(subscribe.rejected, handleSubscribeReject);
  },
});

export const authReducer = authSlice.reducer;

export const { clearErrorMessage, clearMessage } = authSlice.actions;
