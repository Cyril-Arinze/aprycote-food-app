import React from 'react';
import ProductSection from '../components/Sections/ProductDetails/ProductSection';
import classes from '../styles/pages-style/ProductDetailsPage.module.css';
import BackButton from '../UI/Buttons/BackButton';
import headerClass from '../styles/pages-style/CategoriesPage.module.css';

const ProductDetailsPage = () => {
  return (
    <section className={classes.product_section}>
      <header className={headerClass.header}>
        <div>
          <BackButton />
          <h1>Meal details</h1>
        </div>
      </header>
      <ProductSection />
    </section>
  );
};

export default ProductDetailsPage;
