import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  success: false,
};

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://iposh-api.vercel.app/api/v1/product/get"
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        return rejectWithValue("No response from the server.");
      } else {
        return rejectWithValue("An error occurred during the request setup.");
      }
    }
  }
);

export const getAllCategories = createAsyncThunk(
  "product/getAllCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://iposh-api.vercel.app/api/v1/category/get"
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        return rejectWithValue("No response from the server.");
      } else {
        return rejectWithValue("An error occurred during the request setup.");
      }
    }
  }
);

const products = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state, action) => {
        state.loading = true;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = true;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error occurred while signing up.";
        state.success = false;
      })
      .addCase(getAllCategories.pending, (state, action) => {
        state.loading = true;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = true;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error occurred while signing up.";
        state.success = false;
      });
  },
});

export default products.reducer;
