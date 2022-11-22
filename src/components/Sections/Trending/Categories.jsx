import React from 'react';
import SectionHeader from '../SectionHeader';

import classes from '../../../styles/sections-styles/Trending/Categories.module.css';
import CategoriesItem from './CategoriesItem';

const categories = [
  { category: 'Beef' },
  { category: 'Chicken' },
  { category: 'Dessert' },
  { category: 'Lamb' },
  { category: 'Miscellaneous' },
  { category: 'Pasta' },
  { category: 'Pork' },
  { category: 'Seafood' },
  { category: 'Side' },
  { category: 'Starter' },
  { category: 'Vegan' },
  { category: 'Vegetarian' },
  { category: 'Breakfast' },
  { category: 'Goat' },
];

const Categories = () => {
  const sortedCat = categories.sort(() => 0.5 - Math.random());
  return (
    <aside className={classes.categories}>
      <SectionHeader category="Categories" />
      <ul className={classes.categories__list}>
        {sortedCat.map((category, index) => {
          return <CategoriesItem key={index} category={category.category} />;
        })}
      </ul>
    </aside>
  );
};
export { categories };
export default Categories;
