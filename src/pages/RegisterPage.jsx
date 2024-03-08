import React from 'react';
import { useDispatch } from 'react-redux';

import { Button, TextField } from '@mui/material';

import { apiRegisterUser } from '../redux/auth/authSlice';

import css from '../App.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;

    const formData = {
      name,
      email,
      password,
    };

    dispatch(apiRegisterUser(formData));
  };

  return (
    <div className={css.containerRegister}>
      <h1 className={css.titleRegister}>Make a new account</h1>

      <form className={css.formRegister} onSubmit={onSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          type="text"
          label="Name:"
          name="name"
          placeholder="Alex"
          minLength={2}
          autoComplete="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email:"
          type="email"
          name="email"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          placeholder="alex123@gmail.com"
          autoComplete="email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          type="password"
          name="password"
          label="Password:"
          pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          placeholder="**********"
          autoComplete="new-password"
        />
        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
