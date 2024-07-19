import {  createSlice } from '@reduxjs/toolkit';
import products from '../data/ProductDrink.json';
import productsFood from '../data/ProductFood.json';




const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => {
    return total + item.totalPrice;
  }, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
    isFactorAuthentication2Enabled: false,
    isPasscodeLockEnabled: false,
    isFaceIDEnabled: false,
    filteredProducts: [],
    filteredProductsFood: [],
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item =>
        item.id === newItem.id &&
        item.size === newItem.size &&
        item.ice === newItem.ice &&
        item.sweetness === newItem.sweetness
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity++;
        state.items[existingItemIndex].totalPrice = state.items[existingItemIndex].quantity * state.items[existingItemIndex].price;
      } else {
        state.items.push({ ...newItem, quantity: 1, totalPrice: newItem.price });
      }
      state.totalPrice = calculateTotalPrice(state.items);
    },

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
    logout(state) {
      state.isLoggedIn = false;
    },

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

    clearAll(state) {
      state.items.splice(0, state.items.length);
      state.totalPrice = 0;
    },

    enableFactorAuthentication2(state) {
      state.isFactorAuthentication2Enabled = true;
    },

    disableFactorAuthentication2(state) {
      state.isFactorAuthentication2Enabled = false;
    },

    enablePasscodeLock(state) {
      state.isPasscodeLockEnabled = true;
    },

    disablePasscodeLock(state) {
      state.isPasscodeLockEnabled = false;
    },

    enableFaceID(state) {
      state.isFaceIDEnabled = true;
    },

    disableFaceID(state) {
      state.isFaceIDEnabled = false;
    },


  },
  
      
  
});

export const {
  addToCart,
  removeFromCart,
  logout,
  incrementQuantity,
  decrementQuantity,
  clearAll,
  enableFactorAuthentication2,
  disableFactorAuthentication2,
  enablePasscodeLock,
  disablePasscodeLock,
  enableFaceID,
  disableFaceID,
} = cartSlice.actions;

export default cartSlice.reducer;
