import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = 'Tolya';

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        updateFilter(state, action) {
            state.push(action.payload);
        },
    },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;