import { createSlice } from '@reduxjs/toolkit';

const initialFavouriteState = {
  favouriteItems: [],
};

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: initialFavouriteState,
  reducers: {
    addToFavourite(state, action) {
      // expected payload is an object
      state.favouriteItems = [action.payload, ...state.favouriteItems];
    },
    removeFromFavourite(state, action) {
      //expected payLoad is an ID

      state.favouriteItems = state.favouriteItems.filter(
        (item) => item.id !== action.payload // => return a new array without the item carrying the action payload
      );
    },
  },
});
const favouriteReducer = favouriteSlice.reducer;
export const favouriteActions = favouriteSlice.actions;
export const favouriteItemSelector = (state) => state.favourite.favouriteItems;

export default favouriteReducer;
