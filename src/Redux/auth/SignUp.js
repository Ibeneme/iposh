import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  success: false,
};

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://iposh-api.vercel.app/api/v1/auth/signup",
        { email, password }
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

export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://iposh-api.vercel.app/api/v1/auth/verify-email",
        { email, otp }
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

export const signinUser = createAsyncThunk(
  "auth/signinUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://iposh-api.vercel.app/api/v1/auth/",
        { email, password }
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
export const resendOTP = createAsyncThunk(
  "auth/resendOTP",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://iposh-api.vercel.app/api/v1/auth/resend-otp",
        { email }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
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

export const createPassword = createAsyncThunk(
  "auth/createPassword",
  async ({ email, newPassword }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        "https://iposh-api.vercel.app/api/v1/auth/forgot-password",
        { email, newPassword }
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error occurred while signing up.";
        state.success = false;
      })
      .addCase(verifyEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(verifyEmail.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error occurred while verifying email.";
        state.success = false;
      })
      .addCase(signinUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;

        const { token, user } = action.payload.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error occurred while signing in.";
        state.success = false;
      })
      .addCase(resendOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(resendOTP.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(resendOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error occurred while resending OTP.";
        state.success = false;
      })
      .addCase(createPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createPassword.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(createPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error occurred while creating a new password.";
        state.success = false;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
