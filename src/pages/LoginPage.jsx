import React from 'react';
import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../redux/auth/authSlice';

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
        <label className={css.labelLogin}>
          Email:
          <input
            type="email"
            name="email"
            placeholder="alex123@gmail.com"
            className={css.inputLogin}
            required
          />
        </label>
        <label className={css.labelLogin}>
          Password:
          <input
            type="password"
            name="password"
            placeholder="**********"
            minLength={7}
            className={css.inputLogin}
            required
          />
        </label>
        <button type="submit" className={css.buttonLogin}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
