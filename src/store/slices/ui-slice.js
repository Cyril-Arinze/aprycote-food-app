import { createSlice } from '@reduxjs/toolkit';

const initialUIState = {
  sideBarIsShown: true,
  cartIsShown: false,
  popUp: false,
  popUpInfo: null,
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
    togglePopUp(state, action) {
      // toggle the visibility of the cart
      state.popUp = !state.popUp;
      if (action.payload) {
        state.popUp = true;
        state.popUpInfo = action.payload;
      }
      state.popUpInfo = action.payload;
    },
  },
});

const UIAction = UISlice.actions;
const UIReducer = UISlice.reducer;
const sideBarSelector = (state) => state.UI.sideBarIsShown;
const cartSelector = (state) => state.UI.cartIsShown;
const popUpSelector = (state) => state.UI.popUp;
const popUpInfoSelector = (state) => state.UI.popUpInfo;

export {
  UIAction,
  sideBarSelector,
  cartSelector,
  popUpSelector,
  popUpInfoSelector,
};

export default UIReducer;
