import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { apiGetContacts } from '../redux/contacts/contactsSlice';
import {
  selectContacts,
  selectContactsError,
  selectContactsIsLoading,
} from '../redux/contacts/contactsSelectors';

import css from '../App.module.css';

import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { Loader } from 'components/Loader/Loader';
import { SearchFilter } from 'components/SearchFilter/SearchFilter';
import { ContactsList } from 'components/ContactsList/ContactsList';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && 'Error'}
      <div className={css.containerContacts}>
        <div className={css.containerContactsFilter}>
          <SearchFilter />
          {contacts && <ContactsList />}
        </div>
        <AddContactForm />
      </div>
    </>
  );
};

export default ContactsPage;
