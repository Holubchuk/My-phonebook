import React from 'react';
import { useSelector } from 'react-redux';

import { selectAuthIsLoggedIn } from '../../redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';

import css from './Layout.module.css'


export const Layout = ({ children }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn)

  return (
    <div>
      <header className={css.headerLayout}>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </header>

      <main>{children}</main>
    </div>
  );
};
