import { createSelector } from "@reduxjs/toolkit";

export const selectStateWaterDayList = (state) => state.water.dayWaterList;
export const selectStateContacts = (state) => state.contacts.contacts;
export const selectFilter = (state) => state.filter.filter
export const selectLoading = (state) => state.isLoading
export const selectError = (state) => state.error

export const selectVisibleContacts = createSelector(
[ selectStateContacts, selectFilter],
    (contacts, filter) => {
        
         return filter.length > 0
      ?  contacts.filter(contact =>
            contact.name.toLowerCase()
              .includes(filter.toLowerCase()))
             : contacts;
 }
)
