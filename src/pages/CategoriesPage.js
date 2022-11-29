import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import AvailableMealList from '../components/Sections/Meal/AvailableMealList';
import useHttp from '../hooks/use-http';
import { fetchMealByCategories } from '../lib/apiCall';
import BackButton from '../UI/Buttons/BackButton';
import classes from '../styles/pages-style/CategoriesPage.module.css';
import { categories } from '../components/Sections/Trending/Categories';
import MealItemSkeleton from '../UI/Loader/Skeleton Loader/MealItemSkeleton';

const CategoriesPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const categoryName = searchParam.get('category_name');
  const {
    sendRequest: fetchMealByCategoriesFn,
    status: mealStatus,
    data: mealsData,
    error: mealError,
  } = useHttp(fetchMealByCategories);

  useEffect(() => {
    fetchMealByCategoriesFn(categoryName);
  }, [fetchMealByCategoriesFn, categoryName]);

  const changeCategoriesHandler = (evt) => {
    setSearchParam({ category_name: evt.target.value });
  };

  let content;
  if (mealStatus === 'pending') {
    content = <MealItemSkeleton />;
  }
  if (mealStatus === 'completed' && mealError) {
    content = <p className="centered">{mealError}</p>;
  }
  if (mealStatus === 'completed' && mealsData === null && !mealError) {
    content = (
      <p className="centered">{categoryName} is not a valid category</p>
    );
  }

  if (mealStatus === 'completed' && mealsData) {
    content = <AvailableMealList meals={mealsData} />;
  }
  return (
    <section className="full-page">
      <header className={classes.header}>
        <div className={classes.action}>
          <BackButton />
          <h1>{categoryName} category</h1>
        </div>
        <select
          className={classes.category_selector}
          onChange={changeCategoriesHandler}
          value="others"
        >
          <option value="others">others</option>
          {categories.map((category) => {
            return (
              <option key={category.category} value={category.category}>
                {category.category}
              </option>
            );
          })}
        </select>
        {mealsData && (
          <p>
            {mealsData.length} {mealsData.length > 1 ? 'meals' : 'meal'} in{' '}
            {categoryName} category
          </p>
        )}
      </header>
      {content}
    </section>
  );
};

export default CategoriesPage;
