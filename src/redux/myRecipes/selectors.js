export const selectMyRecipes = state =>
  state.myRecipes.availableRecipes.recipes;
// export const selectMyRecipes = state => state.myRecipes;

export const selectMyRecipesIsLoading = state => state.myRecipes.isLoading;

export const selectMyRecipesError = state => state.myRecipes.error;
export const selectTotalMyRecipes = state =>
  state.myRecipes.availableRecipes.total;
