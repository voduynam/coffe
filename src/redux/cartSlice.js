import { createSlice } from '@reduxjs/toolkit';
import users from '../data/User.json';

const MAX_LOGIN_ATTEMPTS = 3;

//  calculate total price of items in the cart
const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => {
    return total + item.totalPrice;
  }, 0);
};

const cartSlice = createSlice({
  // delarae 
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
    isLoggedIn: false,
    user: null,
    loginError: null,
    loginAttempts: 0,
    isFactorAuthentication2Enabled: false,
    isPasscodeLockEnabled: false,
    isFaceIDEnabled: false,

  },
  reducers: {

    //add to cart
    addToCart(state, action) {
      const newItem = action.payload;
      //find 
      const existingItemIndex = state.items.findIndex(item =>
        item.id === newItem.id &&
        item.size === newItem.size &&
        item.ice === newItem.ice &&
        item.sweetness === newItem.sweetness
      );
      //check have product if have a then  quantity +1
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity++;
        //update total in a product
        state.items[existingItemIndex].totalPrice = state.items[existingItemIndex].quantity * state.items[existingItemIndex].price;
      } else {
        //add new iem
        state.items.push({ ...newItem, quantity: 1, totalPrice: newItem.price });
      }
      state.totalPrice = calculateTotalPrice(state.items); // Update total price after adding item
    },


    //remove from cart
    removeFromCart(state, action) {
      const { id, size, ice, sweetness } = action.payload;
      const existingItemIndex = state.items.findIndex(item =>
        item.id === id &&
        item.size === size &&
        item.ice === ice &&
        item.sweetness === sweetness
      );

      if (existingItemIndex !== -1) {
        const removedItem = state.items[existingItemIndex];
        if (removedItem.quantity > 1) {
          removedItem.quantity--;
          removedItem.totalPrice = removedItem.quantity * removedItem.price;
        } else {
          state.totalPrice -= removedItem.totalPrice;
          state.items.splice(existingItemIndex, 1);
        }
      }
      state.totalPrice = calculateTotalPrice(state.items);
    },

    //handle Login
    login(state, action) {
      const { email, password } = action.payload;
      const user = users.username.find(user => user.Email === email && user.Password === password);

      if (user && state.loginAttempts < MAX_LOGIN_ATTEMPTS) {
        state.isLoggedIn = true;
        state.user = user;
        state.loginError = null;

      } else {
        state.loginAttempts++;
        if (state.loginAttempts >= MAX_LOGIN_ATTEMPTS) {
          state.isLoggedIn = false;
          state.user = null;
          state.loginError = "Too many unsuccessful login attempts. Please try again later.";

        } else {
          state.isLoggedIn = false;
          state.user = null;
          state.loginError = "Invalid email or password!";
        }
      }
      
    },

    //handle log out
    logout(state,){
      state.isLoggedIn=false;
    },


    // increment quantity
    incrementQuantity(state, action) {
      const { id, size, ice, sweetness } = action.payload;
      const existingItemIndex = state.items.findIndex(item =>
        item.id === id &&
        item.size === size &&
        item.ice === ice &&
        item.sweetness === sweetness
      );
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity++;
        state.items[existingItemIndex].totalPrice = state.items[existingItemIndex].quantity * state.items[existingItemIndex].price;
      }
      state.totalPrice = calculateTotalPrice(state.items);
    },


    //decrment quantity
    decrementQuantity(state, action) {
      const { id, size, ice, sweetness } = action.payload;
      const existingItemIndex = state.items.findIndex(item =>
        item.id === id &&
        item.size === size &&
        item.ice === ice &&
        item.sweetness === sweetness
      );
      if (existingItemIndex !== -1) {
        const decreasedItem = state.items[existingItemIndex];
        if (decreasedItem.quantity > 1) {
          decreasedItem.quantity--;
          decreasedItem.totalPrice = decreasedItem.quantity * decreasedItem.price;
        }
      }
      state.totalPrice = calculateTotalPrice(state.items);
    },

    //clear all
    clearAll(state, action) {
      state.items.splice(0, state.items.length);
      state.totalPrice = 0; // Reset total price when clearing all items
    },

    //on  FactorAuthentication2
    enableFactorAuthentication2: (state) => {
      state.isFactorAuthentication2Enabled = true;
    },
    //off FactorAuthentication2
    disableFactorAuthentication2: (state) => {
      state.isFactorAuthentication2Enabled = false;
    },

    //on  PasscodeLock
    enablePasscodeLock: (state) => {
      state.isPasscodeLockEnabled = true;
    },

     //off PasscodeLock
    disablePasscodeLock: (state) => {
      state.isPasscodeLockEnabled = false;
    },

     //on  FaceID
    enableFaceID: (state) => {
      state.isFaceIDEnabled = true;
    },

     //off FaceID
    disableFaceID: (state) => {
      state.isFaceIDEnabled = false;
    },
  },
});

export const { addToCart,
  removeFromCart,
  login,
  incrementQuantity,
  decrementQuantity,
  clearAll,
  enableFactorAuthentication2,
  disableFactorAuthentication2,
  enablePasscodeLock,
  disablePasscodeLock,
  enableFaceID,
  disableFaceID,
  logout,
} = cartSlice.actions;
export default cartSlice.reducer;
