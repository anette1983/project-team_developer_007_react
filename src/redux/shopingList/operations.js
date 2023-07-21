import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchShopingList = createAsyncThunk(
  'shopingList/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/recipes/shopping-list');
      console.log(data);
      if (data === null || undefined) return {};
      return data.list || data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addToShopingList = createAsyncThunk(
  'shopingList/add',
  async (itemData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/recipes/shopping-list', itemData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFromShopingList = createAsyncThunk(
  'shopingList/delete',
  async (itemId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `/api/recipes/shopping-list/${itemId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
