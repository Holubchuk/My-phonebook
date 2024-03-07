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
        {/* <label className={css.labelRegister}>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Alex"
            minLength={2}
            className={css.inputRegister}
            required
          />
        </label> */}
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
        {/* <label className={css.labelRegister}>
          Email:
          <input
            type="email"
            name="email"
            placeholder="alex123@gmail.com"
            className={css.inputRegister}
            required
          />
        </label> */}
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
        {/* <label className={css.labelRegister}>
          Password:
          <input
            type="password"
            name="password"
            placeholder="**********"
            minLength={7}
            className={css.inputRegister}
            required
          />
        </label> */}
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
