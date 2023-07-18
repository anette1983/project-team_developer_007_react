export const handlePending = state => {
  state.isLoading = true;
};

export const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFetchFavoriteRecipes = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.favoriteRecipesList = payload;
};

export const handleAddFavoriteRecipes = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  // state.favoriteRecipesList.recipes.push(payload);
};

export const handleDeleteFavoriteRecipes = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  // const index = state.favoriteRecipesList.recipes.findIndex(
  //   item => item._id === payload._id
  // );
  // state.favoriteRecipesList.recipes.splice(index, 1);
};
