export const selectRecipes = state => state.recipesBySearch.availableRecipes;

export const selectPage = state => state.recipesBySearch.page;

export const selectIsLoading = state => state.recipesBySearch.isLoading;

export const selectError = state => state.recipesBySearch.error;
