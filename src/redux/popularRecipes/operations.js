import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPopularRecipes = createAsyncThunk(
  'popularRecipes/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/recipes/popular-recipe');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
