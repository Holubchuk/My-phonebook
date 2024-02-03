import { useDispatch } from 'react-redux';
import css from './ContactsListItem.module.css';
import { apiDeleteContact } from '../../redux/contacts/contactsSlice';

export const ContactsListItem = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactListItem}>
      {contacts.name}: {contacts.number}
      <button
        onClick={() => dispatch(apiDeleteContact(contacts.id))}
        className={css.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};
