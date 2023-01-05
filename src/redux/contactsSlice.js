import { createSlice, nanoid } from '@reduxjs/toolkit';

const phoneInitialState = [
  { id: 0, name: 'Learn HTML and CSS', number: 7327632762 },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: phoneInitialState,
  reducers: {
    addPhone(state, action) {
      state.push(action.payload);
    },
    deletePhone(state, action) {
      const index = state.findIndex(phone => phone.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addPhone, deletePhone } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
