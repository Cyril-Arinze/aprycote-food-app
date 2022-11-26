import React from 'react';

import Button from './Button';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import classes from '../../styles/UI-styles/Button-styles/BackButton.module.css';

const BackButton = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate('/home', { replace: true });
  };
  return (
    <Button className={classes.back__button} onClick={backHandler}>
      <MdOutlineKeyboardBackspace />
    </Button>
  );
};

export default BackButton;
