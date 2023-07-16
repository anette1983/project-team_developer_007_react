export const handlePending = state => {
  state.isLoading = true;
};

export const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFetchPopularRecipes = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.popularRecipes = payload;
};
