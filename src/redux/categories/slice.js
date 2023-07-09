import { createSlice } from '@reduxjs/toolkit';

import { fetchCategories } from './operations';

const initialState = {
  categoryList: [],
  isLoading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: {
    [fetchCategories.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.categoryList = action.payload;
    },
  },
});

export const categoryReduser = categorySlice.reducer;
