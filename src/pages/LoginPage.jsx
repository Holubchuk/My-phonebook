import React from 'react';
import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../redux/auth/authSlice';

import { TextField, Button } from '@mui/material';

import css from '../App.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;

    const formData = {
      email,
      password,
    };

    dispatch(apiLoginUser(formData));
  };

  return (
    <div className={css.containerLogin}>
      <h1 className={css.titleLogin}>Have an account? Let's go</h1>

      <form className={css.formLogin} onSubmit={onSubmit}>
        {/* <label className={css.labelLogin}>
          Email:
          <input
            type="email"
            name="email"
            placeholder="alex123@gmail.com"
            className={css.inputLogin}
            required
          />
        </label> */}
        <TextField
          margin="normal"
          required
          fullWidth
          type="email"
          label="Email:"
          name="email"
          autoComplete="email"
          autoFocus
          placeholder="alex123@gmail.com"
        />
        {/* <label className={css.labelLogin}>
          Password:
          <input
            type="password"
            name="password"
            placeholder="**********"
            minLength={7}
            className={css.inputLogin}
            required
          />
        </label> */}
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password:"
          type="password"
          name="password"
          placeholder="**********"
          autoComplete="current-password"
        />
        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;

