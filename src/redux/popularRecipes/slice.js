import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getPopularRecipes } from './operations';
import { handleFetchPopularRecipes, handlePending, handleReject } from './actions';

const popularRecipesSlice = createSlice({
  name: 'popularRecipes',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getPopularRecipes.pending, handlePending)
      .addCase(getPopularRecipes.fulfilled, handleFetchPopularRecipes)
      .addCase(getPopularRecipes.rejected, handleReject);
  },
});

export const popularRecipesReduser = popularRecipesSlice.reducer;
