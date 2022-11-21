import React from 'react';
import BackButton from '../UI/Buttons/BackButton';
import headerClass from '../styles/pages-style/CategoriesPage.module.css';
import AvailableMealList from '../components/Sections/Meal/AvailableMealList';
import { useSelector } from 'react-redux';
import { favouriteItemSelector } from '../store/slices/favourites-slice';

const Favourite = () => {
  const favouriteMeals = useSelector(favouriteItemSelector);
  const meals = [...favouriteMeals];
  let content;
  if (meals.length === 0) {
    content = <p className="centered">No item in Favourites</p>;
  }
  if (meals.length !== 0) {
    content = <AvailableMealList meals={meals} />;
  }
  return (
    <section className="full-page">
      <header className={headerClass.header}>
        <BackButton />
        <h1>Favourite</h1>
      </header>
      {content}
    </section>
  );
};

export default Favourite;
