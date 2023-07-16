export const selectMyRecipes = state =>
  state.myRecipes.availableRecipes.recipes;

export const selectMyRecipesIsLoading = state => state.myRecipes.isLoading;

export const selectMyRecipesError = state => state.myRecipes.error;
