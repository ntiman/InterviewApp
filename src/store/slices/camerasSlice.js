import { createSlice } from "@reduxjs/toolkit";

export const camerasSlice = createSlice({
  name: "camerasSlice",
  initialState: {
    cameras: [],
    selectedCamera: null,
    error: "",
  },
  reducers: {
    setCameras: (state, action) => {
      state.cameras = action.payload;
      state.selectedCamera = action.payload[0];
    },
    setCamerasLoadingError: (state, action) => {
      state.error = action.payload;
    },
    setSelectedCamera: (state, action) => {
      state.selectedCamera = action.payload;
    },
  },
});

export const {
  setCameras,
  setCamerasLoadingError,
  setSelectedCamera,
} = camerasSlice.actions;

export default camerasSlice.reducer;
