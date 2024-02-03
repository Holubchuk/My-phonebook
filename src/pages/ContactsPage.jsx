import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import {
  selectContacts,
  selectContactsError,
  selectContactsIsLoading,
} from '../redux/contacts/contactsSlice.selectors';
import {
  apiAddContact,
  apiGetContacts,
  apiRemoveContact,
} from '../redux/contacts/contactsSlice';
import { Loader } from 'components/Loader/Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  const onDeleteContact = contacId => {
    dispatch(apiRemoveContact(contacId))
  };

  const onSubmit = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.elements.contactName.value;
    const number = evt.currentTarget.elements.contactNumber.value;

    const formData = {
      name,
      number,
    };

    dispatch(apiAddContact(formData))
  };

  return (
    <div>
      ContactsPage
      {isLoading && <Loader />}
      {error && 'Error'}
      <form onSubmit={onSubmit}>
        <label>
          <span>Name:</span>
          <br />
          <input
            type="text"
            name="contactName"
            placeholder="John Taco"
            required
          />
        </label>{' '}
        <br />
        <label>
          <span>Number:</span>
          <br />
          <input
            type="text"
            name="contactNumber"
            placeholder="+380635661285"
            required
          />
        </label>{' '}
        <br />
        <button type="submit">Add contact</button>
      </form>
      <ul>
        {Array.isArray(contacts) &&
          contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <h3>{name}</h3>
                <p>{number}</p>
                <button onClick={() => onDeleteContact(id)} type="button">
                  ❌
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ContactsPage;
