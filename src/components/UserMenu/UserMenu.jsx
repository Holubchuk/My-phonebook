import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiLogoutUser } from '../../redux/auth/authSlice';
import {
  selectAuthIsLoading,
  selectAuthUserData,
} from '../../redux/auth/authSelectors';
import css from './UserMenu.module.css'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectAuthUserData);
  const isLoading = useSelector(selectAuthIsLoading);

  const handleLogOut = () => dispatch(apiLogoutUser());

  const userEmail = userData?.email ?? "Could't get user email";
  return (
    <div className={css.containerMenu}>
      <p className={css.userWelcomeMenu}>Welcome, <span className={css.spanMenu}>{userEmail}</span></p>
      <button onClick={handleLogOut} disabled={isLoading} type="button" className={css.logoutButtonMenu}>
        Logout
      </button>
    </div>
  );
};

