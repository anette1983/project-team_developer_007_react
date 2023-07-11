import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchIngredients } from './operations';
import { handleFetchIngredients, handlePending, handleReject } from './actions';

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchIngredients.pending, handlePending)
      .addCase(fetchIngredients.fulfilled, handleFetchIngredients)
      .addCase(fetchIngredients.rejected, handleReject);
  },
});

export const ingredientsReduser = ingredientsSlice.reducer;
