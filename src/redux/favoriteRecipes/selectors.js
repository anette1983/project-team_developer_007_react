export const selectFavoriteRecipes = state =>
  state.favoriteRecipes.favoriteRecipesList.recipes;

export const selectFavoriteRecipesIsLoading = state =>
  state.favoriteRecipes.isLoading;

export const selectFavoriteRecipesError = state => state.favoriteRecipes.error;
