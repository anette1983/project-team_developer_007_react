import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addToShopingList,
  deleteFromShopingList,
  fetchShopingList,
} from './operations';
import {
  handleAddToShopingList,
  handleDeleteFromShopingList,
  handleFetchShopingList,
  handlePending,
  handleReject,
} from './actions';

const shopingListSlice = createSlice({
  name: 'shopingList',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchShopingList.pending, handlePending)
      .addCase(fetchShopingList.fulfilled, handleFetchShopingList)
      .addCase(fetchShopingList.rejected, handleReject)
      .addCase(addToShopingList.pending, handlePending)
      .addCase(addToShopingList.fulfilled, handleAddToShopingList)
      .addCase(addToShopingList.rejected, handleReject)
      .addCase(deleteFromShopingList.pending, handlePending)
      .addCase(deleteFromShopingList.fulfilled, handleDeleteFromShopingList)
      .addCase(deleteFromShopingList.rejected, handleReject);
  },
});

export const shopingListReduser = shopingListSlice.reducer;
