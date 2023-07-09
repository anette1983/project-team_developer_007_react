import { createSlice } from '@reduxjs/toolkit';
import {
  fetchMainPage,
  fetchByCategory,
  fetchMore,
  fetchRecipeById,
} from './operations';

const handlePending = state => (state.isLoading = true);

const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  availableRecipes: [],
  page: 1,
  currentRecipe: null,
  isLoading: false,
  error: null,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: {
    [fetchMainPage.pending]: handlePending,
    [fetchMainPage.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.availableRecipes = action.payload;
    },
    [fetchMainPage.rejected]: handleReject,

    [fetchByCategory.pending]: handlePending,
    [fetchByCategory.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.availableRecipes = action.payload;
    },
    [fetchByCategory.rejected]: handleReject,

    [fetchMore.pending]: handlePending,
    [fetchMore.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.availableRecipes.push(...action.payload);
      state.page = state.page + 1;
    },
    [fetchMore.rejected]: handleReject,

    [fetchRecipeById.pending]: handlePending,
    [fetchRecipeById.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.currentRecipe = action.payload;
    },
    [fetchRecipeById.rejected]: handleReject,
  },
});

export const recipesReduser = recipesSlice.reducer;
