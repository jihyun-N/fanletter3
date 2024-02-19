import { configureStore } from "@reduxjs/toolkit";
import letters from "store/modules/letters";
import member from "store/modules/member";

const store = configureStore({
  reducer: {
    letters,
    member,
  },
});

export default store;
