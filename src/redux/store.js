import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/slice';
import { recipesReduser } from './recipes/slice';
import { categoryReduser } from './categories/slice';
import { myRecipesReduser } from './myRecipes/slice';
import { ingredientsReduser } from './ingredients/slice';
import { favoriteRecipesReduser } from './favoriteRecipes/slice';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    recipes: recipesReduser,
    myRecipes: myRecipesReduser,
    categories: categoryReduser,
    ingredients: ingredientsReduser,
    favoriteRecipes: favoriteRecipesReduser,

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
