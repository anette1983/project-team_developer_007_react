export const handlePending = state => {
  state.isLoading = true;
};

export const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFetchShopingList = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.list = payload;
  console.log(payload);
};

export const handleAddToShopingList = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.list.push(payload);
};

export const handleDeleteFromShopingList = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const index = state.list.findIndex(item => item._id === payload._id);
  state.list.splice(index, 1);
};
