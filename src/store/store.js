import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth-slice';
import UIReducer from './slices/ui-slice';

const store = configureStore({
  reducer: { UI: UIReducer, auth: authReducer },
});

export default store;
