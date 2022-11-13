import React from 'react';

import classes from '../../../styles/sections-styles/Trending/TrendingMealSection.module.css';
import SectionHeader from '../SectionHeader';
import Categories from './Categories';
import TrendingMealList from './TrendingMealList';
import burgerImg from '../../../assets/bgBurger.png';

const trendData = [
  {
    name: 'Mushroom pizza',
    image:
      'https://www.aberdeenskitchen.com/wp-content/uploads/2020/08/Cheesy-Pepperoni-Mushroom-Pizza-3.jpg',
    quantity: 1,
    price: 19.9,
    trend: 'Top of the week',
    person: 20,
    calories: 48,
  },
  {
    name: 'Chick-Fil-A Sandwich',
    image: 'https://burgerburger.co.nz/wp-content/uploads/2020/01/BC.jpg',
    quantity: 1,
    price: 19.9,
    trend: 'Top of the day',
    person: 50,
    calories: 60,
  },
  {
    name: 'Spay Arrabiata',
    image:
      'https://www.aberdeenskitchen.com/wp-content/uploads/2020/08/Cheesy-Pepperoni-Mushroom-Pizza-3.jpg',
    quantity: 1,
    price: 19.9,
    trend: 'Top of the week',
    person: 20,
    calories: 48,
  },
  {
    name: 'Burger',
    image: 'https://burgerburger.co.nz/wp-content/uploads/2020/01/BC.jpg',
    quantity: 1,
    price: 19.9,
    trend: 'Top of the week',
    person: 20,
    calories: 48,
  },
  {
    name: 'Spay Arrabiata',
    image:
      'https://www.aberdeenskitchen.com/wp-content/uploads/2020/08/Cheesy-Pepperoni-Mushroom-Pizza-3.jpg',
    quantity: 1,
    price: 19.9,
    trend: 'Top of the week',
    person: 20,
    calories: 48,
  },
  {
    name: 'Burger',
    image: 'https://burgerburger.co.nz/wp-content/uploads/2020/01/BC.jpg',
    quantity: 1,
    price: 19.9,
    trend: 'Top of the week',
    person: 20,
    calories: 48,
  },
  {
    name: 'Spay Arrabiata',
    image:
      'https://www.aberdeenskitchen.com/wp-content/uploads/2020/08/Cheesy-Pepperoni-Mushroom-Pizza-3.jpg',
    quantity: 1,
    price: 19.9,
    trend: 'Top of the week',
    person: 20,
    calories: 48,
  },
];

const TrendingMealSection = () => {
  return (
    <section className={classes['trending-meal']}>
      <div className={classes.drop_image}>
        <img src={burgerImg} alt="burger" />
      </div>
      <main>
        <SectionHeader category="Trending Orders" />
        <TrendingMealList trends={trendData} />
        <TrendingMealList trends={trendData} />
      </main>
      <Categories />
    </section>
  );
};

export default TrendingMealSection;
