import { createSlice } from "@reduxjs/toolkit";

export const eventsSlice = createSlice({
  name: "eventsSlice",
  initialState: {
    images: [],
    events: [],
    currentImageIndex: 0,
    isError: false,
    error: "",
  },
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    nextImage: (state) => {
      if (state.currentImageIndex < state.images.length - 1) {
        state.currentImageIndex += 1;
      }
    },
    previousImage: (state) => {
      if (state.currentImageIndex > 0) {
        state.currentImageIndex -= 1;
      }
    },
    resetCurrentIndex: (state) => {
      state.currentImageIndex = 0;
    },
  },
});

export const {
  setImages,
  setEvents,
  setError,
  nextImage,
  previousImage,
  resetCurrentIndex,
} = eventsSlice.actions;

export default eventsSlice.reducer;
