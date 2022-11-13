import React from 'react';

import classes from '../../../styles/sections-styles/Trending/TrendingMealList.module.css';
import TrendingMealItem from './TrendingMealItem';

const TrendingMealList = (props) => {
  return (
    <ul className={classes.trend_list}>
      {props.trends.map((trend, index) => {
        return (
          <TrendingMealItem
            key={index}
            image={trend.image}
            meal={trend.name}
            trend={trend.trend}
            persons={trend.person}
            calories={trend.calories}
            price={trend.price}
          />
        );
      })}
    </ul>
  );
};

export default TrendingMealList;
