import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const extraActions = [fetchContacts, addContact, deleteContact];
const getActionsWithType = type => extraActions.map(action => action[type]);

const fetchContactsSuccesReducer = (state, action) => {
  state.contactsList = action.payload;
};

const addContactsSuccesReducer = (state, action) => {
  state.contactsList.push(action.payload);
};

const deleteContactsSuccesReducer = (state, action) => {
  const index = state.contactsList.findIndex(
    contact => contact.id === action.payload.id
  );
  state.contactsList.splice(index, 1);
};

const anySuccesReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const anyPendingReducer = state => {
  state.isLoading = true;
};

const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = {
  contactsList: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder =>
    builder
      // fulfilled
      .addCase(fetchContacts.fulfilled, fetchContactsSuccesReducer)
      .addCase(addContact.fulfilled, addContactsSuccesReducer)
      .addCase(deleteContact.fulfilled, deleteContactsSuccesReducer)
      .addMatcher(isAnyOf(...getActionsWithType('fulfilled')), anySuccesReducer)
      // pending
      .addMatcher(isAnyOf(...getActionsWithType('pending')), anyPendingReducer)
      // rejected
      .addMatcher(
        isAnyOf(...getActionsWithType('rejected')),
        anyRejectedReducer
      ),
});

export const contactsReducer = contactsSlice.reducer;
