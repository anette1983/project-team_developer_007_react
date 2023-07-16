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

export const fetchBySearch = createAsyncThunk(
  'recipes/fetchBySearch',
  async ({ searchBy, query }, thunkAPI) => {
    //possible value for searchBy: 'search' (means title) || 'ingredients'
    try {
      const { data } = await axios.get(`/api/recipes/${searchBy}`, {
        params: { query },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
