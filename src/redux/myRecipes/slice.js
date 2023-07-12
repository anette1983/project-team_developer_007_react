import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { addMyRecipe, deleteMyRecipe, fetchMyRecipes } from './operations';
import {
  handleAddMyRecipe,
  handleDeleteMyRecipe,
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
      .addCase(addMyRecipe.pending, handlePending)
      .addCase(addMyRecipe.fulfilled, handleAddMyRecipe)
      .addCase(addMyRecipe.rejected, handleReject)
      .addCase(deleteMyRecipe.pending, handlePending)
      .addCase(deleteMyRecipe.fulfilled, handleDeleteMyRecipe)
      .addCase(deleteMyRecipe.rejected, handleReject);
  },
});


export const myRecipesReduser = myRecipesSlice.reducer;
