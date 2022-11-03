import { createSlice } from '@reduxjs/toolkit';

const initialUIState = {
  sideBarIsShown: true,
};
const UISlice = createSlice({
  name: 'UI',
  initialState: initialUIState,
  reducers: {
    toggleSideBar(state) {
      state.sideBarIsShown = !state.sideBarIsShown;
    },
  },
});

const UIAction = UISlice.actions;
const UIReducer = UISlice.reducer;
const sideBarSelector = (state) => state.UI.sideBarIsShown;

export { UIAction, sideBarSelector };

export default UIReducer;
