import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addFavoriteRecipi,
  deleteFavoriteRecipi,
  fetchFavoriteRecipes,
} from './operations';
import {
  handleAddFavoriteRecipes,
  handleDeleteFavoriteRecipes,
  handleFetchFavoriteRecipes,
  handlePending,
  handleReject,
} from './actions';

const favoriteRecipesSlice = createSlice({
  name: 'favoriteRecipes',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchFavoriteRecipes.pending, handlePending)
      .addCase(fetchFavoriteRecipes.fulfilled, handleFetchFavoriteRecipes)
      .addCase(fetchFavoriteRecipes.rejected, handleReject)
      .addCase(addFavoriteRecipi.pending, handlePending)
      .addCase(addFavoriteRecipi.fulfilled, handleAddFavoriteRecipes)
      .addCase(addFavoriteRecipi.rejected, handleReject)
      .addCase(deleteFavoriteRecipi.pending, handlePending)
      .addCase(deleteFavoriteRecipi.fulfilled, handleDeleteFavoriteRecipes)
      .addCase(deleteFavoriteRecipi.rejected, handleReject);
  },
});

export const favoriteRecipesReduser = favoriteRecipesSlice.reducer;
