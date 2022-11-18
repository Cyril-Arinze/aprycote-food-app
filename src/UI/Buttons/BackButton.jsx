import React from 'react';

import Button from './Button';
import { IoIosReturnLeft } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import classes from '../../styles/UI-styles/Button-styles/BackButton.module.css';

const BackButton = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };
  return (
    <Button className={classes.back__button} onClick={backHandler}>
      <IoIosReturnLeft />
    </Button>
  );
};

export default BackButton;
