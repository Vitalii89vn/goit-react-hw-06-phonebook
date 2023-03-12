import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactInitialState = [];

const contactSlice = createSlice({
  name: "contacts",
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

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactReducer = persistReducer(persistConfig, contactSlice.reducer);
export const { addContact, deleteContact } = contactSlice.actions;

// Selectors
export const getContacts = state => state.contacts.value;

