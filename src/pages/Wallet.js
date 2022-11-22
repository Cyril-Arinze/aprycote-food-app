import React from 'react';
import headerClass from '../styles/pages-style/CategoriesPage.module.css';
import BackButton from '../UI/Buttons/BackButton';

const Wallet = () => {
  return (
    <section>
      <header className={headerClass.header}>
        <div>
          <BackButton />
          <h1>Wallet</h1>
        </div>
      </header>
      <p className="centered">Wallet section is still under development</p>
    </section>
  );
};

export default Wallet;
