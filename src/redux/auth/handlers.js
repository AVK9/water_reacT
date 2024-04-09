export const handlePending = (state) => {
  state.isLoading = true;
  state.error = '';
};

export const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleSignUp = (state, { payload }) => {
  state.token = payload.token;
  state.profile = {
    email: payload.email,
    userName: payload.userName,
    avatarURL: payload.avatarURL,
    gender: payload.gender,
    waterRate: payload.waterRate,
  };
};

export const handleLoginOut = (state) => {
  state.token = '';
  state.profile = {
    email: null,
    userName: null,
    avatarURL: '',
    gender: '',
    waterRate: 0,
  };
};

export const handleLogin = (state, { payload }) => {
  state.token = payload.token;
  state.profile = {
    email: payload.email,
    userName: payload.userName,
    avatarURL: payload.avatarURL,
    gender: payload.gender,
    waterRate: payload.waterRate,
  };
};

export const handleCurrent = (state, { payload }) => {
  state.profile = {
    email: payload.email,
    userName: payload.userName,
    avatarURL: payload.avatarURL,
    gender: payload.gender,
    waterRate: payload.waterRate,
  };
};
