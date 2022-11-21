import { createSlice } from '@reduxjs/toolkit';

const initialUIState = {
  sideBarIsShown: true,
  cartIsShown: false,
};
const UISlice = createSlice({
  name: 'UI',
  initialState: initialUIState,
  reducers: {
    toggleSideBar(state) {
      // toggle the visibility of the side bar navigation
      state.sideBarIsShown = !state.sideBarIsShown;
    },
    toggleCart(state) {
      // toggle the visibility of the cart
      state.cartIsShown = !state.cartIsShown;
    },
  },
});

const UIAction = UISlice.actions;
const UIReducer = UISlice.reducer;
const sideBarSelector = (state) => state.UI.sideBarIsShown;
const cartSelector = (state) => state.UI.cartIsShown;

export { UIAction, sideBarSelector, cartSelector };

export default UIReducer;
