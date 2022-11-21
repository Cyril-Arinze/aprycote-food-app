import React from 'react';
import MealCategoryItem from './MealCategoryItem';

import classes from '../../../styles/sections-styles/menu category/MealCategoryList.module.css';
import MenuCategorySkeleton from '../../../UI/Loader/Skeleton Loader/MenuCategorySkeleton';

const MealCategoryList = (props) => {
  if (props.status === 'pending') {
    return <MenuCategorySkeleton />;
  }
  if (props.status === 'completed' && props.error) {
    return <p>{props.error}</p>;
  }
  return (
    <ul className={classes.category_list}>
      {props.category.map((data) => {
        return (
          <MealCategoryItem
            id={data.id}
            key={data.id}
            image={data.image}
            category={data.category}
          />
        );
      })}
    </ul>
  );
};

export default MealCategoryList;
