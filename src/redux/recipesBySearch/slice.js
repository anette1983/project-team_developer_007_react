import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchMoreBySearch, clearRecipes } from './operations';
import {
  handleFetchMoreFullfilled,
  handlePending,
  handleReject,
  handleClearRecipe,
} from './actions';

const recipesBySearchSlice = createSlice({
  name: 'recipesBySearch',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchMoreBySearch.pending, handlePending)
      .addCase(fetchMoreBySearch.fulfilled, handleFetchMoreFullfilled)
      .addCase(fetchMoreBySearch.rejected, handleReject)
      .addCase(clearRecipes.pending, handleClearRecipe)
      .addCase(clearRecipes.fulfilled, handleClearRecipe)
      .addCase(clearRecipes.rejected, handleClearRecipe);
  },
});

export const recipesBySearchReduser = recipesBySearchSlice.reducer;
