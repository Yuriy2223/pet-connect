import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  form: "",
  transmission: "",
  details: {
    airConditioner: 0,
    kitchen: 0,
    TV: 0,
    shower: 0,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
    setDetails: (state, action) => {
      state.details = action.payload;
    },
    setTransmission: (state, action) => {
      state.transmission = action.payload;
    },
    clearFilters: (state) => {
      state.location = "";
      state.form = "";
      state.transmission = "";
      state.details = {
        airConditioner: 0,
        kitchen: 0,
        TV: 0,
        shower: 0,
      };
    },
  },
});

export const {
  setLocation,
  setForm,
  setTransmission,
  setDetails,
  clearFilters,
} = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
export const selectFilter = (state) => state.filter;
