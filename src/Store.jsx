import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Slices/authSlice';
import startupReducer from "./Slices/startUpSlice";
import eventReducer from "./Slices/eventSlice";
import discussionReduce from "./Slices/discussionSlice"



export const store = configureStore ({
  reducer: {
    auth: authReducer,
    startup: startupReducer,
    event: eventReducer,
    discussion:discussionReduce,
  }
})