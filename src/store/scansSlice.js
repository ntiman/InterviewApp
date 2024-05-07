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
    setCurrentImageIndex: (state, action) => {
      state.currentImageIndex = action.payload;
    },
  },
});

export const { setImages, setError, setCurrentImageIndex } = scansSlice.actions;

export default scansSlice.reducer;
