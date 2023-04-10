import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectContacts = state => state.contacts.listContacts;
export const selectFilter = state => state.filter;

// Составной селектор
// export const selectSearchContacts = state => {
//   console.log('Calculating task count');
//   const contacts = selectContacts(state);
//   const normalizeFilter = selectFilter(state).toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizeFilter)
//   );
// };

// Мемоизация: в данном задании особой разницы не заметила
export const selectSearchContacts = createSelector(
  // Массив входных селекторов
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
