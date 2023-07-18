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
      const { data } = await axios.get(`/api/recipes/category/${category}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMore = createAsyncThunk(
  'recipes/fetchMore',
  async ({ category, page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/recipes/', {
        params: { category, page, limit },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRecipeById = createAsyncThunk(
  'recipes/fetchRecipeById',
  async (recipeId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/recipes/${recipeId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPopular = createAsyncThunk(
  'recipes/fetchPopular',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/recipes/popular-recipe');
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
