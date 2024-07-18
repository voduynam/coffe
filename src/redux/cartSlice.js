import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import users from '../data/User.json'; 
import axios from "axios";
import products from '../data/ProductDrink.json';
import productsFood from '../data/ProductFood.json';


const MAX_LOGIN_ATTEMPTS = 3;

const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => {
    return total + item.totalPrice;
  }, 0);
};

export const login = createAsyncThunk(
  'cart/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://667f7e38f2cb59c38dc90858.mockapi.io/api/user'); // Update with your mock API endpoint

      const user = response.data.find(user => user.Email === email && user.Password === password);

      if (user) {
        return user;
      } else {
        return rejectWithValue("Invalid email or password!");
      }
    } catch (error) {
      return rejectWithValue("Error occurred during login. Please try again later.");
    }
  }
);

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

    searchProducts(state, action) {
      const { keyword } = action.payload;

      state.filteredProducts = products.productDrink.filter(
        item => item.title.toLowerCase().includes(keyword.toLowerCase())
      );
   
      state.filteredProductsFood = productsFood.productFood.filter(
        item => item.title.toLowerCase().includes(keyword.toLowerCase())
      );

    },
  },
  extraReducers:(builder)=>{
    builder
    .addCase(login.pending,(state)=>{
      state.loginError=null;
    })
    .addCase(login.fulfilled,(state, action)=>{
      state.isLoggedIn = true;
      state.user = action.payload;
      state.loginAttempts = 0;
      state.loginError = null;

    })
    .addCase(login.rejected, (state, action) => {
      state.loginAttempts++;
      if (state.loginAttempts >= MAX_LOGIN_ATTEMPTS) {
        state.isLoggedIn = false;
        state.user = null;
        state.loginError = "Too many unsuccessful login attempts. Please try again later.";
      } else {
        state.isLoggedIn = false;
        state.user = null;
        state.loginError = action.payload || "Invalid email or password!";
      }
    });
}
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
  searchProducts
} = cartSlice.actions;

export default cartSlice.reducer;
