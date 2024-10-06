import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from './contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
})
export default store;
