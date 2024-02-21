import { configureStore } from "@reduxjs/toolkit";
import letters from "store/modules/letters";
import member from "store/modules/member";
import authSlice from "store/modules/authSlice";

const store = configureStore({
  reducer: {
    letters,
    member,
    authSlice,
  },
});

export default store;
