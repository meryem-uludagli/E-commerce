import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/slices/sliderSlice";
export const store = configureStore({
  reducer: {
    slider: slideReducer,
  },
});
