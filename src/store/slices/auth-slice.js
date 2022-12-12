import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false,
  userData: {
    name: 'Quest',
    image:
      'https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1',
  },
};

const authSlice = createSlice({
  name: 'Authentication',
  initialState: initialAuthState,
  reducers: {
    toggleIsAuth(state, action) {
      // toggle the authentication state
      state.isAuthenticated = action.payload;
    },
    setUser(state, action) {
      state.userData = action.payload;
    },
  },
});

const authActions = authSlice.actions;
const isAuthSelector = (state) => state.auth.isAuthenticated;
const userDataSelector = (state) => state.auth.userData;
const authReducer = authSlice.reducer;

export { authActions, isAuthSelector, userDataSelector };

export default authReducer;
