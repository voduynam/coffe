import { createSlice } from '@reduxjs/toolkit';
import users from '../data/User.json'; // Assuming this is correctly imported

// Define products and productsFood here or import them from external source
import products from '../data/ProductDrink.json';
import productsFood from '../data/ProductFood.json';

const MAX_LOGIN_ATTEMPTS = 3;

// calculate total price of items in the cart
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
    isLoggedIn: false,
    user: null,
    loginError: null,
    loginAttempts: 0,
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

    // New action to search products by name
    searchProducts(state, action) {
      const { keyword } = action.payload;
      state.filteredProducts = products.filter(
        item => item.title.toLowerCase().includes(keyword.toLowerCase())
      );
      state.filteredProductsFood = productsFood.filter(
        item => item.title.toLowerCase().includes(keyword.toLowerCase())
      );
    },
  },
});

export const {
  addToCart,
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
  searchProducts, // Exporting searchProducts action
} = cartSlice.actions;
export default cartSlice.reducer;
