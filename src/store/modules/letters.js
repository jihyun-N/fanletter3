import { createSlice } from "@reduxjs/toolkit";
import fakeData from "fakeData.json";

const initialState = fakeData;

const lettersSlice = createSlice({
  name: "letters",
  initialState,
  reducers: {
    addLetter: (state, action) => {
      const newLetter = action.payload;
      return [newLetter, ...state];
    },

    deleteLetter: (state, action) => {
      const letterId = action.payload;
      return state.filter((letter) => {
        return letter.id !== letterId;
      });
    },

    aditLetter: (state, action) => {
      const { id, editingText } = action.payload;
      // 오른쪽꺼에서 꺼내온다.
      return state.map((letter) => {
        if (letter.id === id) {
          return { ...letter, content: editingText };
        }
        return letter;
      });
    },
  },
});

export const { addLetter, deleteLetter, aditLetter } = lettersSlice.actions;
export default lettersSlice.reducer;
