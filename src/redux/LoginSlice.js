import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for user login
export const login = createAsyncThunk(
  'login/login',
  async ({ email, password }, { rejectWithValue, getState }) => {
    const { loginAttempts } = getState().login;
    if (loginAttempts >= 3) {
      return rejectWithValue('Account locked due to too many failed login attempts.');
    }

    try {
      const response = await axios.get("https://667f7e38f2cb59c38dc90858.mockapi.io/api/user");
      const user = response.data.find(user => user.Email === email && user.Password === password);

      if (user) {
        return user;
      } else {
        return rejectWithValue("Invalid email or password");
      }
    } catch (error) {
      return rejectWithValue("Error occurred during login. Please try again later.");
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    user: null,
    loginError: null,
    loginAttempts: 0,
    isAccountLocked: false,
  },
  reducers: {
    resetLoginAttempts(state) {
      state.loginAttempts = 0;
      state.isAccountLocked = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loginError = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.loginAttempts = 0;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.loginError = action.payload;
        if (state.loginAttempts < 3) {
          state.loginAttempts += 1;
        } else {
          state.isAccountLocked = true;
        }
      });
  },
});

export const { resetLoginAttempts } = loginSlice.actions;
export default loginSlice.reducer;
