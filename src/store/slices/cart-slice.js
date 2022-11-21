import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantityInCart: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addToCart(state, action) {
      //info: action payload is an object(New cart item)
      // Destructing the object to get the price and ID of the object(new cart item)
      const { id: existingItemID, price: newCartItemPrice } = action.payload;
      // Check if the new cart item is already the cart using the its ID
      const existingItemInCart = state.cartItems.find(
        (item) => item.id === existingItemID
      );
      // if the new item is already in he cart, increment its quantity
      if (existingItemInCart) {
        existingItemInCart.quantity++;
      } else {
        // if its not in the cart, add it to the cart
        state.cartItems = [action.payload, ...state.cartItems];
      }
      // update the total amount
      state.totalAmount = state.totalAmount + newCartItemPrice;
      // update the total quantity of items in cart
      state.totalQuantityInCart = state.cartItems.reduce(
        (prev, item) => prev + item.quantity,
        0
      );
    },
    removeFromCart(state, action) {
      //Info: expected action payLoad is an ID
      const itemID = action.payload;
      const itemToReduce = state.cartItems.find((item) => item.id === itemID);
      // check if the quantity is equal 1
      // if equal to 1, remove from the array
      if (itemToReduce.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
      } else {
        // if greater than 1 reduce the quantity
        itemToReduce.quantity--;
      }
      state.totalAmount = state.totalAmount - itemToReduce.price;
      state.totalQuantityInCart = state.cartItems.reduce(
        (prev, item) => prev + item.quantity,
        0
      );
    },
    DeleteCartItem(state, action) {
      const itemID = action.payload;
      const itemToDelete = state.cartItems.find((item) => item.id === itemID);
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
      state.totalAmount =
        state.totalAmount - itemToDelete.price * itemToDelete.quantity;
      state.totalQuantityInCart = state.cartItems.reduce(
        (prev, item) => prev + item.quantity,
        0
      );
    },
  },
});

const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export const cartItemSelector = (state) => state.cart.cartItems;
export const cartTotalAmountSelector = (state) => state.cart.totalAmount;
export const cartTotalQuantitySelector = (state) =>
  state.cart.totalQuantityInCart;

export default cartReducer;
