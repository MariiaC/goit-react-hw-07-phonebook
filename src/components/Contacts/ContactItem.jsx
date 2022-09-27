import s from './Contacts.module.css';
import { FiTrash2 } from 'react-icons/fi';

export default function ContactItem({
    contact, onDelete, deleting
}) {
    
    const { id, name, phone } = contact;

    return (
         <li className={s.contactItem}>
      <div>
      <span>
        {name}
        </span>
          <span>
        {phone}
      </span>
                <button className={s.button} onClick={() => onDelete(id)}>
                     {deleting ? 'Deleting..' : 'Delete'}
        <FiTrash2 style={{ color: 'red', paddingRight: 10, fontSize:16 }} />
      
      </button>
    </div>
    </li>
    )
}