import { createSlice } from '@reduxjs/toolkit';

const contactInitialState = '';

const contactSlice = createSlice({
  name: "filter",
  initialState: contactInitialState,
  reducers: {
    updateFilter(state, action) {
      state.push(action.payload);
    },
    
      },
});

export const { updateFilter } = contactSlice.actions;
export const filterReducer = contactSlice.reducer;