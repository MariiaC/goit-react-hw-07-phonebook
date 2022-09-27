import s from './ContactForm.module.css';
import { FiPlus } from 'react-icons/fi';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/slicer';

export default function ContactForm() {
    const [createContact] = useCreateContactMutation();
  const { data } = useFetchContactsQuery();

  const handleSubmit = evt => {
    evt.preventDefault();

    const target = evt.target.elements;

    const isInContacts = data.find(
      contact => contact.name.toLowerCase() === target.name.value.toLowerCase()
      );
      
if (isInContacts) {
      alert(`${target.name.value} already exists`);

      return;
    }

    const formDatas = {
      name: target.name.value,
      phone: target.phone.value,
    };

    createContact(formDatas);

    evt.target.reset();
    };
    
 return (
      <form className={s.contactForm} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={s.button} >
          
          <FiPlus style={{ color: 'green', paddingRight: 10, fontSize: 18 }} />
          Add contact
        </button>
      </form>
    );
}