import { configureStore } from "@reduxjs/toolkit";
import { contactsBookReducer } from "./reducer";
import { contactsApi } from './slicer';
import { setupListeners } from "@reduxjs/toolkit/dist/query";

 const store = configureStore({
    reducer: {
        contactsBookReducer,
        [contactsApi.reducerPath]: contactsApi.reducer},
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(), contactsApi.middleware
    ]
});

setupListeners(store.dispatch);


export default store;
