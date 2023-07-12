import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFavoriteRecipes = createAsyncThunk(
  'favoriteRecipes/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/recipes/favorite');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addFavoriteRecipi = createAsyncThunk(
  'favoriteRecipes/addRecipi',
  async (recipiId, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/recipes/favorite', {
        recipiId,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFavoriteRecipi = createAsyncThunk(
  'favoriteRecipes/deleteRecipi',
  async (recipiId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/recipes/favorite/${recipiId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
