import { createSlice } from "@reduxjs/toolkit";

const initialState = "양희철 G";

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (state, action) => {
      const activeMember = action.payload;
      return activeMember;
    },
  },
});

export const { setMember } = memberSlice.actions;
export default memberSlice.reducer;
