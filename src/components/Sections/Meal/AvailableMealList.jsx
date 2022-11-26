import React from 'react';

import classes from '../../../styles/sections-styles/menu category/AvailableMealList.module.css';
import MealItemSkeleton from '../../../UI/Loader/Skeleton Loader/MealItemSkeleton';
import AvailableMealItem from './AvailableMealItem';

const AvailableMealList = (props) => {
  if (props.isLoading === 'pending') {
    // return skeleton load while request is pending
    return <MealItemSkeleton />;
  }
  if (props.isLoading === 'completed' && props.error) {
    //return an error msg if there was an error
    return <p>{props.error}</p>;
  }
  // sort the array of data collected
  const sortedMeal = props.meals.sort(() => 0.5 - Math.random());
  return (
    <ul className={classes.meal_list}>
      {sortedMeal.map((meal) => {
        return (
          <AvailableMealItem
            id={meal.id}
            key={meal.id}
            image={meal.image}
            meal={meal.meal}
            price={meal.price}
            tags={meal.tag}
            category={props.category}
          />
        );
      })}
    </ul>
  );
};

export default AvailableMealList;
