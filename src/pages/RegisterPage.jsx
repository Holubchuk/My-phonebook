import React from 'react';
import { useDispatch } from 'react-redux';

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
        <label className={css.labelRegister}>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Alex"
            minLength={2}
            className={css.inputRegister}
            required
          />
        </label>
        <label className={css.labelRegister}>
          Email:
          <input
            type="email"
            name="email"
            placeholder="alex123@gmail.com"
            className={css.inputRegister}
            required
          />
        </label>
        <label className={css.labelRegister}>
          Password:
          <input
            type="password"
            name="password"
            placeholder="**********"
            minLength={7}
            className={css.inputRegister}
            required
          />
        </label>
        <button type="submit" className={css.buttonRegister}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
