import React, { memo } from 'react';
import MoreButton from '../../UI/Buttons/MoreButton';
import classes from '../../styles/sections-styles/SectionHeader.module.css';
import { Link } from 'react-router-dom';

const SectionHeader = (props) => {
  return (
    <header className={classes.category__header}>
      <h3>{props.category}</h3>
      <Link
        to={`categories?category_name=${
          props.categoryName ? props.categoryName : 'Beef'
        }`}
        className={classes.category__actions}
      >
        <p>View all</p>
        <MoreButton />
      </Link>
    </header>
  );
};

export default memo(SectionHeader);
