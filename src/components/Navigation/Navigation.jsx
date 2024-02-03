import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectAuthIsLoggedIn } from '../../redux/auth/authSlice.selectors';
import css from './Navigation.module.css'

export const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <div className={css.header}>
      <nav className={css.nav}>
      <NavLink
        className={({ isActive }) =>
          `${css.navLink} ${isActive ? css.active : ''}`
        }
        to="/"
      >
        <span className={css.navSpan}>Home</span>
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
            to="/contacts"
          >
           <span className={css.navSpan}>Contacts</span>
          </NavLink>
        </>
      ) : (
        <div className={css.registerLoginContainer}>
          <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
            to="/register"
          >
            <span className={css.navSpan}>Register</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
            to="/login"
          >
            <span className={css.navSpan}>Login</span>
          </NavLink>
          </div>
      )}
      </nav>
    </div>
  );
};
