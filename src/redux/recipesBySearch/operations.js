import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMoreBySearch = createAsyncThunk(
  'recipes/fetchMoreBySearch',
  async ({ searchBy, query, page, limit }, thunkAPI) => {
    //possible value for searchBy: 'search' (means title) || 'ingredients'
    try {
      const { data } = await axios.get(`/api/recipes/${searchBy}`, {
        params: { query, page, limit },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const clearRecipes = createAsyncThunk(
  'recipes/clearRecipes',
  (_, thunkAPI) => {}
);
