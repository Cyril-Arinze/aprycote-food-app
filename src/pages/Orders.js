import React from 'react';
import BackButton from '../UI/Buttons/BackButton';
import headerClass from '../styles/pages-style/CategoriesPage.module.css';

const Orders = () => {
  return (
    <section>
      <header className={headerClass.header}>
        <BackButton />
        <h1>Orders</h1>
      </header>
      <p className="centered">Orders section is still under development</p>
    </section>
  );
};

export default Orders;
