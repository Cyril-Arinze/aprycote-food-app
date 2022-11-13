import React from 'react';
import { Link } from 'react-router-dom';

import classes from '../../../styles/sections-styles/Trending/TrendingMealItem.module.css';
import AddButton from '../../../UI/Buttons/AddButton';

const TrendingMealItem = (props) => {
  return (
    <li className={classes['trend-item']}>
      <div className={classes['trend-item__image']}>
        <img src={props.image} alt={props.meal} />
      </div>
      <div className={classes['trend-item__detail']}>
        <Link to="/">
          <div className={classes['trend-item_desc']}>
            <span>👑 {props.trend}</span>
            <p>{props.meal}</p>
          </div>
          <div className={classes['trend-item_feature']}>
            <p>{props.calories} Calories</p>
            <hr />
            <p>{props.persons} persons</p>
          </div>
        </Link>
        <div className={classes['trend-item_price']}>
          <p>${props.price}</p>
          <AddButton />
        </div>
      </div>
    </li>
  );
};

export default TrendingMealItem;
