import { useSelector } from 'react-redux';

import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/slicer';

import ContactItem from './ContactItem';

export default function ContactList() {

     const { data, isFetching, refetch } = useFetchContactsQuery();

  const filterWord = useSelector(state => state.contactsBookReducer.filter);

  const contactsfromAPI = data;

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const getfilteredContacts = () => {

    const normalizedFilter = filterWord.toLowerCase();
    const checkedContacts = contactsfromAPI.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return checkedContacts;
    };
    
    return (
           <div>
        <button type='button' onClick={refetch}>
            Refresh search
        </button>
         { isFetching && <div> Loading... </div> }
     <ul>
        {data &&
          getfilteredContacts().map(contact => (
            <ContactItem
              onDelete={deleteContact}
              deleting={isDeleting}
              key={contact.id}
              contact={contact}></ContactItem>
      ))}
  
            </ul>
            </div>)
}