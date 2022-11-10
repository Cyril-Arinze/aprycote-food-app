import React from 'react';

import Button from './Button';
import { BsPlus } from 'react-icons/bs';
import classes from '../../styles/UI-styles/Button-styles/MoreButton.module.css';

const AddButton = () => {
  return (
    <Button className={classes.btn}>
      <BsPlus />
    </Button>
  );
};

export default AddButton;
