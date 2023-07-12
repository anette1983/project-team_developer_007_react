import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMainPage = createAsyncThunk(
  'recipes/fetchMainPage',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/recipes/main-page');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchByCategory = createAsyncThunk(
  'recipes/fetchByCategory',
  async (category, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/recipes/', {
        params: { category },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMore = createAsyncThunk(
  'recipes/fetchMore',
  async ({ category, page }, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/recipes/', {
        params: { category, page }, // need find out correct parameter key for pagination from backend
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRecipeById = createAsyncThunk(
  'recipes/fetchRecipeById',
  async (recipiId, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/recipes/', {
        params: { id: recipiId },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
