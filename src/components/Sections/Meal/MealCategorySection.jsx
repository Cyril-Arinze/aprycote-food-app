import React, { memo, useEffect } from 'react';

import classes from '../../../styles/sections-styles/menu category/MenuCategorySection.module.css';
import MealCategoryList from './MealCategoryList';
import SectionHeader from '../SectionHeader';
import MealCategoryCart from './MealCategoryCart';
import AvailableMealList from './AvailableMealList';
import useHttp from '../../../hooks/use-http';
import { fetchCategories, fetchMealByCategories } from '../../../lib/apiCall';
import { useSearchParams } from 'react-router-dom';

const MealCategorySection = () => {
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
    status: MealStatus,
    data: MealsData,
    error: MealError,
  } = useHttp(fetchMealByCategories);

  useEffect(() => {
    fetchCategoriesFn();
  }, [fetchCategoriesFn]);
  useEffect(() => {
    fetchMealByCategoriesFn(categoryName);
  }, [fetchMealByCategoriesFn, categoryName]);

  return (
    <section id="menu" className={classes['meals-category']}>
      <main>
        <SectionHeader category="Menu Category" categoryName={categoryName} />
        {MealError && categoriesError && (
          <p className="centered">{MealError}</p>
        )}
        {!(MealError && categoriesError) && (
          <>
            <MealCategoryList
              category={categoriesData}
              status={categoriesStatus}
              error={categoriesError}
            />
            <AvailableMealList
              meals={MealsData}
              isLoading={MealStatus}
              error={MealError}
            />
          </>
        )}
      </main>
      <MealCategoryCart />
    </section>
  );
};

export default memo(MealCategorySection);
