import { configureStore } from "@reduxjs/toolkit";
import scansReducer from "./slices/eventsSlice";

export const store = configureStore({
    reducer: {
      scansReducer,
    }
  });