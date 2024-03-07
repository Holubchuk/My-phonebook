import { useDispatch } from 'react-redux';
import css from './ContactsListItem.module.css';
import { apiDeleteContact } from '../../redux/contacts/contactsSlice';

import { Button } from '@mui/material';

export const ContactsListItem = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactListItem}>
      <span className={css.contactName}>{contacts.name}:</span>
      <span className={css.contactNumber}>{contacts.number}</span>
      <Button
        onClick={() => dispatch(apiDeleteContact(contacts.id))}
        className={css.deleteButton}
        variant="outlined"
      >
        Delete
      </Button>
    </li>
  );
};
