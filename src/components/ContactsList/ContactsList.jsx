import css from './ContactsList.module.css';
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/ContactsSelectors';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <ContactsListItem key={contact.id} contacts={contact} />
      ))}
    </ul>
  );
};
