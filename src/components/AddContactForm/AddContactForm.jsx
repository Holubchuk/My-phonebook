import { useDispatch, useSelector } from 'react-redux';
import css from './AddContactForm.module.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import { apiAddContact } from '../../redux/contacts/contactsSlice';

import { TextField, Button } from '@mui/material';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [form, setForm] = useState({
    name: '',
    number: '',
  });

  const handleFormChange = event => {
    const { name, value } = event.target;
    setForm(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      name: form.name.toLowerCase(),
      number: form.number,
    };

    const hasDuplicates = contacts.some(
      contact => contact.name === formData.name
    );
    if (hasDuplicates) {
      alert(`Profile with name ${formData.name} already exists!`);
      return;
    }
    const finalContacts = {
      ...formData,
      id: nanoid(),
    };

    dispatch(apiAddContact(finalContacts));
    setForm('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField
        margin="normal"
        required
        fullWidth
        type="text"
        label="Name:"
        name="name"
        autoComplete="name"
        autoFocus
        value={form.name || ''}
        placeholder="Alex"
        onChange={handleFormChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        type="tel"
        label="Number:"
        name="number"
        autoComplete="number"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}" 
        value={form.number || ''}
        onChange={handleFormChange}
        placeholder="111-11-11"
      />
      <Button type="submit" variant="contained">
        Add Contact
      </Button>
    </form>
  );
};
