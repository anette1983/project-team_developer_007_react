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

  if ('recipes' in payload) {
    state.availableRecipes.recipes = payload.recipes
  }

  if ('total' in payload) {
    state.availableRecipes.total = payload.total
  }
};

export const handleAddMyRecipe = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  // state.availableRecipes.recipes?state.availableRecipes.recipes.push(payload):state.availableRecipes.recipes=payload;
  state.availableRecipes.recipes.push(payload);
};

export const handleDeleteMyRecipe = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const index = state.availableRecipes.recipes.findIndex(
    item => item._id === payload.id
  );
  state.availableRecipes.recipes.splice(index, 1);
  state.availableRecipes.total = state.availableRecipes.total - 1;
};
