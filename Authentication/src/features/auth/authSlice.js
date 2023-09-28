import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginStart: (state) => {//when it starts do:
      state.loading = true;
    },
    loginSuccess: (state, action) => {//when its succeeded do:
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure: (state) => {//when failed do:
      state.loading = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = loginSlice.actions;

export default loginSlice.reducer;
