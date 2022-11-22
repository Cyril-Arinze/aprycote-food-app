import React from 'react';
import BackButton from '../UI/Buttons/BackButton';
import headerClass from '../styles/pages-style/CategoriesPage.module.css';

const ErrorPage = () => {
  return (
    <section>
      <header className={headerClass.header}>
        <div>
          <BackButton />
          <h1>Orders</h1>
        </div>
      </header>
      <p className="centered">Error section is still under development</p>
    </section>
  );
};

export default ErrorPage;
