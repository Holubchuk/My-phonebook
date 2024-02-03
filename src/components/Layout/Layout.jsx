import React from 'react';
import { useSelector } from 'react-redux';

import { selectAuthIsLoggedIn } from '../../redux/auth/authSlice.selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';


export const Layout = ({ children }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn)

  return (
    <div>
      <header>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </header>

      <main>{children}</main>
    </div>
  );
};
