import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  drinks: [],
  currentPage: 1,
  isLoading: false,
  error: null,
  count:0
};

export const fetchDrinks = createAsyncThunk(
  'drinks/fetchDrinks',
  async ({ page, limit  }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://667f7e38f2cb59c38dc90858.mockapi.io/api/producDrink?page=${page}&limit=${limit}`);
      
      return response.data;

    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const searchProducts = createAsyncThunk(
  'drinks/searchProducts',
  async ({ keyword }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://667f7e38f2cb59c38dc90858.mockapi.io/api/producDrink?search=${keyword}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const drinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrinks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDrinks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.drinks = action.payload;
        
      })
      .addCase(fetchDrinks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(searchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.drinks = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentPage } = drinksSlice.actions;

export const selectDrinks = (state) => state.drinks.drinks;
export const selectCurrentPage = (state) => state.drinks.currentPage;
export const selectIsLoading = (state) => state.drinks.isLoading;
export const selectError = (state) => state.drinks.error;

export default drinksSlice.reducer;
