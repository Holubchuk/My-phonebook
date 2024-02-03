import { useDispatch } from 'react-redux';
import css from './ContactsListItem.module.css';
import { deleteContact } from '../../redux/contacts/operations';

export const ContactsListItem = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactListItem}>
      {contacts.name}: {contacts.phone}
      <button
        onClick={() => dispatch(deleteContact(contacts.id))}
        className={css.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};
