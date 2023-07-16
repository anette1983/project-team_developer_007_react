
export const handlePending = state => {
  state.isLoading = true;
};

export const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.availableRecipes = []
  
};

export const handleFirstFetchFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.availableRecipes = payload;
  state.page = 1;
};

export const handleFetchMoreFullfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.availableRecipes = payload;
  state.page = state.page + 1;
};

export const handleFetchByIdFullfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.currentRecipe = payload;
};

export const handleClearRecipe = (state) => {
  state.availableRecipes = []
  state.total=null
}
