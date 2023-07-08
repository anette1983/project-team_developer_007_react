import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'; // ----- !

const authHeader = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register', // ----- !
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('users/signup', credentials); // ----- !
      authHeader.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
