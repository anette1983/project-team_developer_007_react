import { createSlice } from '@reduxjs/toolkit';

import { constants } from 'redux/constants';

const initialState = { status: constants.categoryFilters.all };

const categoryFilterSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategoryFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setCategoryFilter } = categoryFilterSlice.actions;
export const categoriesReducer = categoryFilterSlice.reducer;
