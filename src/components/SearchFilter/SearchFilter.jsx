import { useState } from 'react';
import { setFilter } from '../../redux/contacts/contactsSlice';
import css from './SearchFilter.module.css';
import { useDispatch } from 'react-redux';

import { TextField } from '@mui/material';

export const SearchFilter = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    const value = e.target.value;
    setInputValue(value);
    dispatch(setFilter(value));
  };

  return (
    <div className={css.filterContainer}>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Contact search:"
        type="text"
        name="filter"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};
