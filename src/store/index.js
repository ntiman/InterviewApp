import { configureStore } from "@reduxjs/toolkit";
import scansReducer from "./slices/scansSlice";

export const store = configureStore({
    reducer: {
      scansReducer,
    }
  });