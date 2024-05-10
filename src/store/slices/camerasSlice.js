import { createSlice } from "@reduxjs/toolkit";

export const camerasSlice = createSlice({
  name: "camerasSlice",
  initialState: {
    cameras: [],
    selectedCamera: "",
    isError: false,
    error: "",
  },
  reducers: {
    setCameras: (state, action) => {
      state.cameras = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSelectedCamera: (state, action) => {
      state.selectedCamera = action.payload;
    },
  },
});

export const {
  setImages,
  setError,
  nextImage,
  previousImage,
  resetCurrentIndex,
} = camerasSlice.actions;

export default camerasSlice.reducer;
