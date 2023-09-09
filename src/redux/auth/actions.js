export const handleRefreshPending = state => {
  state.isLoading = true;
  state.isRefreshing = true;
  state.error = null;
};

export const handleSubscribePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleRefreshReject = (state, { payload }) => {
  state.isLoading = false;
  state.isRefreshing = false;
  state.error = payload;
};

export const handleSubscribeReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleRegisterFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.message = payload.message;
  state.error = null;
};

export const handleLoginFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.error = null;
};

export const handleLogoutFulfilled = state => {
  state.isLoading = false;
  state.user = { name: null, email: null, avatar: null };
  state.token = null;
  state.isLoggedIn = false;
  state.error = null;
};

export const handleRefreshFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};

export const handleUpdateFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.user.name = payload.name;
  state.user.avatar = payload.avatarURL;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
