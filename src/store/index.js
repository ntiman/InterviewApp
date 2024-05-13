import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./slices/eventsSlice";
import camerasReducer from "./slices/camerasSlice";

export const store = configureStore({
    reducer: {
      eventsReducer,
      camerasReducer,
    }
  });