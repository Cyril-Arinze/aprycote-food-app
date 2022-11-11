import React from 'react';

import classes from '../../../styles/sections-styles/menu category/AvailableMealList.module.css';
import AvailableMealItem from './AvailableMealItem';

const mealData = [
  {
    name: 'Mushroom pizza',
    image:
      'https://www.aberdeenskitchen.com/wp-content/uploads/2020/08/Cheesy-Pepperoni-Mushroom-Pizza-3.jpg',
    quantity: 1,
    price: 19.9,
  },
  {
    name: 'Burger',
    image: 'https://burgerburger.co.nz/wp-content/uploads/2020/01/BC.jpg',
    quantity: 1,
    price: 19.9,
  },
  {
    name: 'Spay Arrabiata',
    image:
      'https://www.aberdeenskitchen.com/wp-content/uploads/2020/08/Cheesy-Pepperoni-Mushroom-Pizza-3.jpg',
    quantity: 1,
    price: 19.9,
  },
  {
    name: 'Burger',
    image: 'https://burgerburger.co.nz/wp-content/uploads/2020/01/BC.jpg',
    quantity: 1,
    price: 19.9,
  },
  {
    name: 'Spay Arrabiata',
    image:
      'https://www.aberdeenskitchen.com/wp-content/uploads/2020/08/Cheesy-Pepperoni-Mushroom-Pizza-3.jpg',
    quantity: 1,
    price: 19.9,
  },
  {
    name: 'Burger',
    image: 'https://burgerburger.co.nz/wp-content/uploads/2020/01/BC.jpg',
    quantity: 1,
    price: 19.9,
  },
  {
    name: 'Spay Arrabiata',
    image:
      'https://www.aberdeenskitchen.com/wp-content/uploads/2020/08/Cheesy-Pepperoni-Mushroom-Pizza-3.jpg',
    quantity: 1,
    price: 19.9,
    tag: 'Curry, yam, Goat, Fish',
  },
  {
    name: 'Burger',
    image: 'https://burgerburger.co.nz/wp-content/uploads/2020/01/BC.jpg',
    quantity: 1,
    price: 19.9,
  },
  {
    name: 'Spay Arrabiata',
    image:
      'https://www.aberdeenskitchen.com/wp-content/uploads/2020/08/Cheesy-Pepperoni-Mushroom-Pizza-3.jpg',
    quantity: 1,
    price: 19.9,
  },
];
const AvailableMealList = (props) => {
  return (
    <ul className={classes.meal_list}>
      {mealData.map((meal, index) => {
        return (
          <AvailableMealItem
            key={index}
            image={meal.image}
            meal={meal.name}
            price={meal.price}
            tags={meal.tag}
          />
        );
      })}
    </ul>
  );
};

export default AvailableMealList;
