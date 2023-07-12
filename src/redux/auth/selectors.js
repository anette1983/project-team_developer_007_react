export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectAuthError = state => state.auth.error;


export const selectUserName = state => state.auth.user.name;
export const selectUserAvatar = state => state.auth.user.avatar;

export const selectToken = state => state.auth.token;

