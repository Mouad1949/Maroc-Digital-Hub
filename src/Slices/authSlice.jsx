import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// login thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:3000/users", {
        params: {
          email: userData.email,
          password: userData.password,
        },
      });

      if (res.data.length > 0) {
        const user = res.data[0];
        return { user, token: "fake-jwt-token" };
      } else {
        return rejectWithValue("Email ou mot de passe incorrect");
      }
    } catch (err) {
      return rejectWithValue("Erreur serveur",err);
    }
  }
);

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async(userData,thunkAPI) =>{
    try{
        const res = await axios.post("http://localhost:3000/users",userData);
        return res.data
    }catch  (err) {
      return thunkAPI.rejectWithValue(" Error register",err)
    }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    // ? Login
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

      //? Register

      builder
      .addCase(registerUser.pending,(state)=>{
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled,(state,action)=>{
        state.loading = false
        state.user = action.payload
      })
      .addCase(registerUser.rejected, (state,action)=>{
        state.loading = false;
        state.error = action.payload;
      })

  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
