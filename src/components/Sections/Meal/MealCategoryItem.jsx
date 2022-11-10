import React, { useState } from 'react';

import MoreButton from '../../../UI/Buttons/MoreButton';
import classes from '../../../styles/sections-styles/menu category/MealCategoryItem.module.css';

const MealCategoryItem = (props) => {
  const [isActive, setIsActive] = useState(false);
  const itemClickHandler = () => {
    setIsActive(true);
  };

  const categoryClasses = isActive
    ? `${classes.category_item} ${classes.active_tab}`
    : `${classes.category_item}`;
  return (
    <li onClick={itemClickHandler} className={categoryClasses}>
      <div className={classes['category_item-image']}>
        <img src={props.image} alt={props.category} />
      </div>
      <div className={classes['category_item-desc']}>
        <p>{props.category}</p>
      </div>
      <hr />
      <div className={classes['category_item-btn']}>
        <MoreButton />
      </div>
    </li>
  );
};

export default MealCategoryItem;
