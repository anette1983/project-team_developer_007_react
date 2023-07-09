import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { constants } from 'redux/constants';

export const fetchMainPage = createAsyncThunk(
  'recipes/fetchMainPage',
  async (_, thunkAPI) => {
    try {
      // will be changed to api request
      const breakfastRecipes = await constants.recipes
        .filter(el => el.category === 'Breakfast')
        .slice(0, 4);
      const miscellaneousRecipes = await constants.recipes
        .filter(el => el.category === 'Miscellaneous')
        .slice(0, 4);
      const chickenRecipes = await constants.recipes
        .filter(el => el.category === 'Chicken')
        .slice(0, 4);
      const dessertRecipes = await constants.recipes
        .filter(el => el.category === 'Dessert')
        .slice(0, 4);
      const mainPageList = [
        ...breakfastRecipes,
        ...miscellaneousRecipes,
        ...chickenRecipes,
        ...dessertRecipes,
      ];
      console.log(mainPageList);
      return mainPageList;
      //
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchByCategory = createAsyncThunk(
  'recipes/fetchMainPage',
  async (category, thunkAPI) => {
    try {
      // will be changed to api request
      const recipesByCategory = await constants.recipes
        .filter(el => el.category === category)
        .slice(0, 8);
      return recipesByCategory;
      //
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMore = createAsyncThunk(
  'recipes/fetchMore',
  async ({ category, page }, thunkAPI) => {
    try {
      // will be changed to api request
      const moreRecipesByCategory = await constants.recipes
        .filter(el => el.category === category)
        .slice(page * 8, page * 8 + 8);
      return moreRecipesByCategory;
      //
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
