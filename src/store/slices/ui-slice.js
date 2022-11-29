import { createSlice } from '@reduxjs/toolkit';

const initialUIState = {
  sideBarIsShown: true,
  cartIsShown: false,
  popUpDetails: {
    popUp: false,
    popUpInfo: null,
    popUpIcon: null,
    popUpColor: null,
  },
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
      // toggle the visibility of the popUp notification
      state.popUpDetails.popUp = !state.popUpDetails.popUp;
      if (action.payload) {
        state.popUpDetails.popUp = true;
        state.popUpDetails.popUpInfo = action.payload.info;
        state.popUpDetails.popUpIcon = action.payload.icon;
        state.popUpDetails.popUpColor = action.payload.color;
      }
    },
  },
});

const UIAction = UISlice.actions;
const UIReducer = UISlice.reducer;
const sideBarSelector = (state) => state.UI.sideBarIsShown;
const cartSelector = (state) => state.UI.cartIsShown;
const popUpDetailsSelector = (state) => state.UI.popUpDetails;

export {
  UIAction,
  sideBarSelector,
  cartSelector,
  popUpDetailsSelector,
  // popUpInfoSelector,
  // popUpIconSelector,
};

export default UIReducer;
