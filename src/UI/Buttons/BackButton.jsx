import React from 'react';

import Button from './Button';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import classes from '../../styles/UI-styles/Button-styles/BackButton.module.css';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      className={classes.back__button}
      onClick={() => {
        navigate('/home?category=Beef', { replace: true });
      }}
    >
      <MdOutlineKeyboardBackspace />
    </Button>
  );
};

export default BackButton;
