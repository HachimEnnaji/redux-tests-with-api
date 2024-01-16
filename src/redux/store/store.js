import { configureStore } from "@reduxjs/toolkit";
import fetchAxios from "../reducers/fetchAxios";

export const store = configureStore({
  reducer: {
    fetch: fetchAxios, // null
  },
});

export default store;
