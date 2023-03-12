import { createSlice } from '@reduxjs/toolkit';

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     login: '',
//     isLoggedIn: false,
//   },
//   reducers: {
//     logIn(state, action) {
//       state.login = action.payload;
//       state.isLoggedIn = true;
//     },
//     logOut(state) {
//       state.login = '';
//       state.isLoggedIn = false;
//     },
//   },
// });

// export const { logIn, logOut } = userSlice.actions;

const contactInitialState = [];

const contactSlice = createSlice({
  name: "tasks",
  initialState: contactInitialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
      },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;