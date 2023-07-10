import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMyRecipes = createAsyncThunk(
  'myRecipes/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/recipes/own-recipes');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addMyRecipi = createAsyncThunk(
  'myRecipes/addRecipi',
  async (recipiData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/recipes/own-recipes', recipiData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteMyRecipi = createAsyncThunk(
  'myRecipi/deleteMyRecipi',
  async (recipiId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `/api/recipes/own-recipes/${recipiId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
