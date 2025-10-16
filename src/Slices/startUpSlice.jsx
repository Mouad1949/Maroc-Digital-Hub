import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { updateUserRole } from "./authSlice";
// ====================== GET ALL STARTUPS ======================
export const getAllStartup = createAsyncThunk(
  "startup/getAllStartup",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:3000/startups");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// ====================== GET USER of STARTUPS ======================
export const getUserStartup = createAsyncThunk(
  "startup/getUserStartup",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { user } = getState().auth;

      const res = await axios.get("http://localhost:3000/startups");

      if (user && user.role === "Startup") {
        const userStartups = res.data.filter(
          (s) => String(s.userCreation) === String(user.id)
        );
        return userStartups;
      } else {
        return res.data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ====================== ADD STARTUP ======================
export const saveStartup = createAsyncThunk(
  "startup/saveStartup",
  async ({ formData, imageFile }, { rejectWithValue, getState, dispatch }) => {
    try {
      if (!imageFile) throw new Error("Veuillez sélectionner une image.");
      const imageData = new FormData();
      imageData.append("file", imageFile);
      imageData.append("upload_preset", "Brief_Rudex");

      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dh8xcvzyi/image/upload",
        imageData
      );
      const logoUrl = uploadRes.data.secure_url;
      const { user } = getState().auth;
      const newSaveData = {
        ...formData,
        logo: logoUrl,
        userCreation: user.id, 
      };
      const res = await axios.post("http://localhost:3000/startups", newSaveData);
      if (user.role !== "Startup") {
        await axios.patch(`http://localhost:3000/users/${user.id}`, {
          role: "Startup",
        });
        dispatch(updateUserRole("Startup"));
        const updateUser = {...user, role:"Startup"};
        localStorage.setItem("user",JSON.stringify(updateUser))
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// ====================== DELETE STARTUP ======================
export const deleteStartup = createAsyncThunk(
  "startup/deleteStartup",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3000/startups/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ====================== UPDATE STARTUP ======================
export const updateStartup = createAsyncThunk(
  "startup/updateStartup",
  async ({ id, formData, imageFile }, { rejectWithValue }) => {
    try {
      let updatedData = { ...formData };

      // Upload logo if new image is selected
      if (imageFile) {
        const imageData = new FormData();
        imageData.append("file", imageFile);
        imageData.append("upload_preset", "Brief_Rudex");
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dh8xcvzyi/image/upload",
          imageData
        );
        updatedData.logo = uploadRes.data.secure_url;
      }

      const res = await axios.put(`http://localhost:3000/startups/${id}`, updatedData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ====================== SLICE ======================
const startUpSlice = createSlice({
  name: "startup",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // ===== GET ALL =====
    builder
      .addCase(getAllStartup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllStartup.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllStartup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      // GET user startups
        .addCase(getUserStartup.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getUserStartup.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(getUserStartup.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    // ===== ADD =====
    builder
      .addCase(saveStartup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveStartup.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(saveStartup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ===== DELETE =====
    builder
      .addCase(deleteStartup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteStartup.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteStartup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ===== UPDATE =====
    builder
      .addCase(updateStartup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStartup.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(updateStartup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default startUpSlice.reducer;
