export const handlePending = state => {
  state.isLoading = true;
};

export const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFetchIngredients = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.availableIngredients = payload;
};
