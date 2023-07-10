import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { addMyRecipi, deleteMyRecipi, fetchMyRecipes } from './operations';
import {
  handleAddMyRecipi,
  handleDeleteMyRecipi,
  handleFetchMyRecipes,
  handlePending,
  handleReject,
} from './actions';

const myRecipesSlice = createSlice({
  name: 'myRecipes',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchMyRecipes.pending, handlePending)
      .addCase(fetchMyRecipes.fulfilled, handleFetchMyRecipes)
      .addCase(fetchMyRecipes.rejected, handleReject)
      .addCase(addMyRecipi.pending, handlePending)
      .addCase(addMyRecipi.fulfilled, handleAddMyRecipi)
      .addCase(addMyRecipi.rejected, handleReject)
      .addCase(deleteMyRecipi.pending, handlePending)
      .addCase(deleteMyRecipi.fulfilled, handleDeleteMyRecipi)
      .addCase(deleteMyRecipi.rejected, handleReject);
  },
});

export const myResipesReduser = myRecipesSlice.reducer;
