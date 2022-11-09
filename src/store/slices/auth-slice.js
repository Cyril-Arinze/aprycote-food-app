import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: true,
  userData: {
    name: 'Cyril Arinze',
    Occupation: 'Research Microbiologist',
    image:
      'https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1',
  },
};

const authSlice = createSlice({
  name: 'Authentication',
  initialState: initialAuthState,
  reducers: {
    toggleIsAuth(state) {
      // toggle the authentication state
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});

const authActions = authSlice.actions;
const isAuthSelector = (state) => state.auth.isAuthenticated;
const userDataSelector = (state) => state.auth.userData;
const authReducer = authSlice.reducer;

export { authActions, isAuthSelector, userDataSelector };

export default authReducer;
