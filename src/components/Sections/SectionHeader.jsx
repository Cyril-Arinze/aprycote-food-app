import React, { memo } from 'react';
import MoreButton from '../../UI/Buttons/MoreButton';
import classes from '../../styles/sections-styles/SectionHeader.module.css';

const SectionHeader = (props) => {
  return (
    <header className={classes.category__header}>
      <h3>{props.category}</h3>
      <div className={classes.category__actions}>
        <p>View all</p>
        <MoreButton />
      </div>
    </header>
  );
};

export default memo(SectionHeader);
