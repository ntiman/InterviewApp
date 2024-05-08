import { createSlice } from "@reduxjs/toolkit";

export const scansSlice = createSlice({
  name: "scansSlice",
  initialState: {
    images: [],
    currentImageIndex: 0,
    isError: false,
    error: "",
  },
  reducers: {
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
    }
  },
});

export const { setImages, setError, nextImage, previousImage } = scansSlice.actions;

export default scansSlice.reducer;
