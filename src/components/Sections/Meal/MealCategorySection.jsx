import React from 'react';

import classes from '../../../styles/sections-styles/menu category/MenuCategorySection.module.css';
import MealCategoryList from './MealCategoryList';
import SectionHeader from '../SectionHeader';
import MealCategoryCart from './MealCategoryCart';
import AvailableMealList from './AvailableMealList';

const MealCategorySection = () => {
  return (
    <section className={classes['meals-category']}>
      <main>
        <SectionHeader category="Meal Category" />
        <MealCategoryList />
        <AvailableMealList />
      </main>
      <MealCategoryCart />
    </section>
  );
};

export default MealCategorySection;
