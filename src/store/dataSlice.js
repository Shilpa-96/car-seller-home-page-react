import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data";
const initialState = {
  currentPage: 1,
  recordsPerPage: 6,
  data: data,
};

const dataSlice = createSlice({
  name: "data",
  initialState,

  reducers: {
    updatePage(state, action) {
      state.currentPage = action.payload;
    },
    searchedData(state, action) {
      if (action.payload === "") {
        state.data = data;
      } else {
        state.data = data.filter((item) => {
          return item.model_name.toLowerCase().includes(action.payload);
        });
      }
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
