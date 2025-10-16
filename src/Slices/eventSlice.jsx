import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ========================= Get All Evenenments=========================
export const getAllEvent = createAsyncThunk(
  "event/getAllEvent",
  async(_,{rejectWithValue}) => {
    try{
        const res = await axios.get("http://localhost:3000/evenements")
        return res.data
    }catch(err){
      return rejectWithValue(err.message)
    }
  }
)
// ==================== Save Evenements===================
export const saveEvents = createAsyncThunk(
  "event/saveEvents",
  async({ formData, imageFile , user } , { rejectWithValue }) => {
    try {
      let imageUrl = "https://via.placeholder.com/400x300"; // default placeholder
      if (imageFile) {
        const imageData = new FormData();
        imageData.append("file", imageFile);
        imageData.append("upload_preset", "Brief_Rudex");

        const saveImage = await axios.post(
          "https://api.cloudinary.com/v1_1/dh8xcvzyi/image/upload",
          imageData
        );
        imageUrl = saveImage.data.secure_url;
      }

      const newEvents = {
        ...formData,
        image: imageUrl,
        name_startup: user.username
      }

      const res = await axios.post("http://localhost:3000/evenements", newEvents);
      return res.data;
    } catch(err) {
      return rejectWithValue(err.message);
    }
  }
);

export const inscrireEventServer = createAsyncThunk(
  "event/inscrireEventServer",
  async (event, { getState, rejectWithValue }) => {
    try {
      const { user } = getState().auth; 
      if (!user) throw new Error("Vous devez être connecté.");
      const newEvent = {
        ...event,
        userId: user.id,
      };
      const res = await axios.post("http://localhost:3000/myEvents", newEvent);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);



export const removeEventServer = createAsyncThunk(
  "event/removeEventServer",
  async(eventId, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3000/myEvents/${eventId}`);
      return eventId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
// ======================getMyEvents =======
export const getMyEvents = createAsyncThunk(
  "event/getMyEvents",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { user } = getState().auth;
      if (!user) throw new Error("Utilisateur non connecté.");

      const res = await axios.get(
        `http://localhost:3000/myEvents?userId=${user.id}`
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);



const EventSlice = createSlice({
  name:"event",
  initialState:{
    data:[],
    myEvents: [],
    loading:false,
    error:null
  },
  reducers:{},
  extraReducers: (builder)=>{
    builder
      .addCase(getAllEvent.pending,(state)=>{
        state.loading = true;
        state.error = null
      })
      .addCase(getAllEvent.fulfilled , (state, action)=>{
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllEvent.rejected, (state , action)=>{
        state.loading = false;
        state.error = action.payload
      });
    builder
      .addCase(getMyEvents.pending,(state)=>{
        state.loading = true;
        state.error = null
      })
      .addCase(getMyEvents.fulfilled , (state, action)=>{
        state.loading = false;
        state.myEvents = action.payload;
      })
      .addCase(getMyEvents.rejected, (state , action)=>{
        state.loading = false;
        state.error = action.payload
      });
    builder
      .addCase(saveEvents.pending,(state)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(saveEvents.fulfilled,(state , action)=>{
        state.loading = false;
        state.dada = state.data.push(action.payload)
      })
      .addCase(saveEvents.rejected , (state,action)=>{
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(inscrireEventServer.pending,(state)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(inscrireEventServer.fulfilled, (state, action) => {
      state.myEvents.push(action.payload);
      })
      .addCase(inscrireEventServer.rejected , (state,action)=>{
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(removeEventServer.pending,(state)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(removeEventServer.fulfilled, (state, action) => {
      state.myEvents = state.myEvents.filter(e => e.id !== action.payload);
      })
      .addCase(removeEventServer.rejected , (state,action)=>{
        state.loading = false;
        state.error = action.payload;
      });
    
  }
})

export default EventSlice.reducer