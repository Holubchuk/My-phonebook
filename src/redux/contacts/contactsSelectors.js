import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts;
export const selectContactsError = state => state.contacts.error;
export const selectContactsIsLoading = state => state.contacts.isLoading;

export const selectFilter = store => store.contacts.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(profile =>
      profile.name.toLowerCase().includes(filter.trim().toLowerCase())
    )
);