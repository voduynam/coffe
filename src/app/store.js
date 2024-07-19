import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cartSlice';
import drinksReducer from '../redux/OderSlice';
import loginReducer from '../redux/LoginSlice';
import registerSlice from '../redux/RegisterSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    drinks: drinksReducer,
    login: loginReducer,
    register: registerSlice
  },
});
