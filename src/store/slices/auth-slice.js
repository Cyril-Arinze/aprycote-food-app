import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: true,
};

const authSlice = createSlice({
  name: 'Authentication',
  initialState: initialAuthState,
  reducers: {
    toggleIsAuth(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});
const authActions = authSlice.actions;
const isAuthSelector = (state) => state.auth.isAuthenticated;
const authReducer = authSlice.reducer;

export { authActions, isAuthSelector };

export default authReducer;
