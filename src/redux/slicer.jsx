import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: ' https://6331d41a3ea4956cfb681b82.mockapi.io' }),

    tagTypes: ['myListOfContacts'], //приклад репети
    
    endpoints: builder => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['myListOfContacts']
        }),

        createContact: builder.mutation({
            query: newContact => ({
                url: '/contacts',
                method: 'POST',
                body: newContact,
            }),
            
            invalidatesTags: ['myListOfContacts'],
        }),

        deleteContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['myListOfContacts']
        }),
    })
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;