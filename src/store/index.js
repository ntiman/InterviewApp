import { configureStore } from "@reduxjs/toolkit";
import scansReducer from "./scansSlice";

export const store = configureStore({
    reducer: {
      scansReducer,
    }
  });