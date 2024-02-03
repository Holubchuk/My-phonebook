import React from 'react';
import css from '../App.module.css'

const HomePage = () => {
  return (
    <div className={css.containerHome}>
      <h2 className={css.headingHome}>Welcome to My Phonebook</h2>
      <p className={css.descriptionHome}>
        Explore your contacts and manage your phonebook efficiently.
      </p>
    </div>
  );
}


export default HomePage;
