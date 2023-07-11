import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/recipes/ingredients/list');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
