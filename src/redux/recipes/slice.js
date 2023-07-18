import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  fetchMainPage,
  fetchByCategory,
  fetchMore,
  fetchRecipeById,
  fetchPopular,
  clearRecipes,
} from './operations';
import {
  handleFetchByIdFullfilled,
  handleFetchMoreFullfilled,
  handleFirstFetchFulfilled,
  handlePending,
  handleReject,
  handleClearRecipe,
} from './actions';

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchMainPage.pending, handlePending)
      .addCase(fetchMainPage.fulfilled, handleFirstFetchFulfilled)
      .addCase(fetchMainPage.rejected, handleReject)
      .addCase(fetchByCategory.pending, handlePending)
      .addCase(fetchByCategory.fulfilled, handleFirstFetchFulfilled)
      .addCase(fetchByCategory.rejected, handleReject)
      .addCase(fetchMore.pending, handlePending)
      .addCase(fetchMore.fulfilled, handleFetchMoreFullfilled)
      .addCase(fetchMore.rejected, handleReject)
      .addCase(fetchRecipeById.pending, handlePending)
      .addCase(fetchRecipeById.fulfilled, handleFetchByIdFullfilled)
      .addCase(fetchRecipeById.rejected, handleReject)
      .addCase(fetchPopular.pending, handlePending)
      .addCase(fetchPopular.fulfilled, handleFirstFetchFulfilled)
      .addCase(fetchPopular.rejected, handleReject)
      .addCase(clearRecipes.pending, handleClearRecipe)
      .addCase(clearRecipes.fulfilled, handleClearRecipe)
      .addCase(clearRecipes.rejected, handleClearRecipe);
  },
});

export const recipesReduser = recipesSlice.reducer;
