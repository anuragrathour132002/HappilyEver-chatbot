import { configureStore } from "@reduxjs/toolkit";
import  firstReducer  from "../features/StudentInfoSlice";

const store = configureStore({
  reducer:{
    update: firstReducer,
  }
});

export default store;