export const handlePending = state => {
  state.isLoading = true;
};

export const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.availableRecipes = [];
};

export const handleFetchMoreFullfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.availableRecipes = payload;
  if (payload.length === 0) {
    state.error = "Error";
  }
  state.page = state.page + 1;
};

export const handleClearRecipe = state => {
  state.availableRecipes = [];
  state.total = null;
  state.error = null
};
