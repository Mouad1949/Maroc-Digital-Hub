import { createAsyncThunk,createSlice, } from "@reduxjs/toolkit";
import axios from "axios";
import { AwardIcon } from "lucide-react";

// ===================GetAll Discussion ================
export const getAllDiscussion = createAsyncThunk(
  "discussion/getAllDiscussion",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:3000/discussions");
      // force array
      return Array.isArray(res.data) ? res.data : [];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ==============Seve Discussion ==============
export const saveDiscussion = createAsyncThunk(
  "discussion/saveDiscussion",
  async (formData, { rejectWithValue, getState }) => {
    try {
    
      const { user } = getState().auth;
      
      if (!user) {
        throw new Error("Vous devez être connecté pour poster une discussion.");
      }

      const newDiscussion = {
        ...formData,
        name: user.username,
        date: new Date().toLocaleString(), 
      };
      const res = await axios.post("http://localhost:3000/discussions", newDiscussion);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const DiscussionSlice = createSlice({
  name:"discussion",
  initialState:{
    discussions:[],
    loading:false,
    error:null,
  },
  reducers:{},

  extraReducers:(builder) =>{
    // get discussion
    builder
      .addCase(getAllDiscussion.pending , (state)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllDiscussion.fulfilled, (state, action) => {
        state.loading = false;
        state.discussions = Array.isArray(action.payload) ? action.payload : [];
      })

      .addCase(getAllDiscussion.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.payload;
      });
      // save discussion
    builder
      .addCase(saveDiscussion.pending , (state)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(saveDiscussion.fulfilled, (state, action)=>{
        state.loading = false;
        state.discussions = state.discussions.push(action.payload);
      })
      .addCase(saveDiscussion.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.payload;
      });
  }
})
export default DiscussionSlice.reducer