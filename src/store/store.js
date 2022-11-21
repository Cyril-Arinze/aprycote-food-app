import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth-slice';
import cartReducer from './slices/cart-slice';
import favouriteReducer from './slices/favourites-slice';
import UIReducer from './slices/ui-slice';

const store = configureStore({
  reducer: {
    UI: UIReducer,
    auth: authReducer,
    cart: cartReducer,
    favourite: favouriteReducer,
  },
});

export default store;
