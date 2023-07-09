export const selectRecipes = state => state.recipes.availableRecipes;

export const selectPage = state => state.recipes.page;

export const selectIsLoading = state => state.recipes.isLoading;

export const selectError = state => state.recipes.error;
