import React from 'react';

import Button from './Button';
import { MdOutlineNavigateNext } from 'react-icons/md';
import classes from '../../styles/UI-styles/Button-styles/MoreButton.module.css';

function MoreButton() {
  return (
    <Button className={classes.btn}>
      <MdOutlineNavigateNext />
    </Button>
  );
}

export default MoreButton;
