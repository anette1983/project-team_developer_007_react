export const handlePending = state => {
  state.isLoading = true;
};

export const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFetchMyRecipes = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.availableRecipes = payload;
};


export const handleAddMyRecipe = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.availableRecipes = payload;
};


export const handleDeleteMyRecipe = (state, { payload }) => {

  state.isLoading = false;
  state.error = null;
  const index = state.availableRecipes.findIndex(
    item => item._id === payload._id
  );
  state.availableRecipes.splice(index, 1);
};
