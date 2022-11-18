import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AvailableMealList from '../components/Sections/Meal/AvailableMealList';
import useHttp from '../hooks/use-http';
import { fetchMealByCategories } from '../lib/apiCall';
import BackButton from '../UI/Buttons/BackButton';
import classes from '../styles/pages-style/CategoriesPage.module.css';

const CategoriesPage = () => {
  const params = useParams();
  const { categoryName } = params;
  const {
    sendRequest: fetchMealByCategoriesFn,
    status: mealStatus,
    data: mealsData,
    error: mealError,
  } = useHttp(fetchMealByCategories);

  useEffect(() => {
    fetchMealByCategoriesFn(categoryName);
  }, [fetchMealByCategoriesFn, categoryName]);

  return (
    <section className="full-page">
      <header className={classes.header}>
        <BackButton />
        <h1>{categoryName} Categories</h1>
      </header>
      <AvailableMealList
        isLoading={mealStatus}
        error={mealError}
        meals={mealsData}
      />
    </section>
  );
};

export default CategoriesPage;
