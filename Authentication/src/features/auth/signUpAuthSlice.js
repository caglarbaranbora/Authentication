import { createSlice } from '@reduxjs/toolkit';

const signUpSlice = createSlice({
  name: 'signUp',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = signUpSlice.actions;

export default signUpSlice.reducer;
