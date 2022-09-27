import { createReducer } from "@reduxjs/toolkit";
import { filter, addContact } from './actions';

const initialState = {
    contacts: [],
    filter: '',
};

export const contactsBookReducer = createReducer(initialState, {
    [addContact]: (state, action) => {
        return {
            ...state,
            contacts: [...state.contacts, action.payload]
        };
    },
    [filter]: (state, action) => { state.filter = action.payload }
});