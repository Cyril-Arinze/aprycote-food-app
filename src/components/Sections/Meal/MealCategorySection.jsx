import React, { memo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import useHttp from '../../../hooks/use-http';
import { fetchCategories, fetchMealByCategories } from '../../../lib/apiCall';
import classes from '../../../styles/sections-styles/menu category/MenuCategorySection.module.css';
import SectionHeader from '../SectionHeader';
import AvailableMealList from './AvailableMealList';
import MealCategoryCart from './MealCategoryCart';
import MealCategoryList from './MealCategoryList';

function useFetchMealCat() {
  const [queryParam] = useSearchParams();
  const categoryName = queryParam.get('category');

  const {
    sendRequest: fetchCategoriesFn,
    status: categoriesStatus,
    data: categoriesData,
    error: categoriesError,
  } = useHttp(fetchCategories);
  const {
    sendRequest: fetchMealByCategoriesFn,
    status: mealStatus,
    data: mealsData,
    error: mealError,
  } = useHttp(fetchMealByCategories);

  useEffect(() => {
    fetchCategoriesFn();
  }, [fetchCategoriesFn]);
  useEffect(() => {
    fetchMealByCategoriesFn(categoryName);
  }, [fetchMealByCategoriesFn, categoryName]);
  return {
    categoriesData,
    categoriesStatus,
    categoriesError,
    mealError,
    mealStatus,
    mealsData,
    categoryName,
  };
}
const MealCategorySection = () => {
  const {
    categoriesData,
    categoriesStatus,
    categoriesError,
    mealError,
    mealStatus,
    mealsData,
    categoryName,
  } = useFetchMealCat();
  return (
    <section id="menu" className={classes['meals-category']}>
      <main>
        <SectionHeader category="Menu Category" categoryName={categoryName} />
        {mealError && categoriesError && (
          <p className="centered">{mealError}</p>
        )}
        {!(mealError && categoriesError) && (
          <>
            <MealCategoryList
              category={categoriesData}
              status={categoriesStatus}
              error={categoriesError}
            />
            <AvailableMealList
              meals={mealsData}
              isLoading={mealStatus}
              error={mealError}
            />
          </>
        )}
      </main>
      <MealCategoryCart />
    </section>
  );
};

export default memo(MealCategorySection);
