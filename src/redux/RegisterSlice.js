// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';


// export const registerUser = createAsyncThunk(
//   'register/addUser',
//   async (newUser, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('https://667f7e38f2cb59c38dc90858.mockapi.io/api/user', newUser);
//       return response.data; 
//     } catch (error) {
//       return rejectWithValue(error.response.data); 
//     }
//   }
// );

// const registerSlice = createSlice({
//   name: 'register',
//   initialState: {
//     user: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: {
//     [registerUser.fulfilled]: (state, action) => {
//       state.user = action.payload; 
//       state.loading = false;
//       state.error = null;
//     },
    
//     [registerUser.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
   
//     [registerUser.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload; 
//     },
//   },
// });

// export default registerSlice.reducer;
