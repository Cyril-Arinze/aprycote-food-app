import React from 'react';

import AddButton from '../../../UI/Buttons/AddButton';
import classes from '../../../styles/sections-styles/menu category/AvailableMealItem.module.css';
import { Link } from 'react-router-dom';

const AvailableMealItem = (props) => {
  return (
    <li className={classes.meal_item}>
      <Link to="/" className={classes['meal_item-link']}>
        <div className={classes['meal_item-image']}>
          <img src={props.image} alt={props.meal} />
        </div>
        <div className={classes['meal_item-details']}>
          <div className={classes['meal_item-desc']}>
            <p className={classes['meal_item-name']}>{props.meal}</p>
            <p className={classes['meal_item-tag']}>
              <span>Tags:</span> {props.tags}
            </p>
            <p className={classes['meal_item-price']}>$ {props.price}</p>
          </div>
          <div className={classes['meal_item-action']}>
            <AddButton />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default AvailableMealItem;
