import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './Contacts/Filter';
import { contactsApi } from './Contacts/Contact-list/contacts-slice';
export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
