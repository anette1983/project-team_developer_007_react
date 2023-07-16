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

export const addMyRecipe = createAsyncThunk(
  'myRecipes/addMyRecipe',
  async (recipeData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/recipes/own-recipes', recipeData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteMyRecipe = createAsyncThunk(
  'myRecipes/deleteMyRecipe',
  async (recipeId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `/api/recipes/own-recipes/${recipeId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
