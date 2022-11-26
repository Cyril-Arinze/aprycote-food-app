import React from 'react';

import Button from './Button';
import { BsPlus } from 'react-icons/bs';
import classes from '../../styles/UI-styles/Button-styles/MoreButton.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/slices/cart-slice';

const AddButton = (props) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addToCart(props.item));
  };
  return (
    <Button onClick={addToCart} className={`${classes.btn} ${props.className}`}>
      {props.children ? props.children : <BsPlus />}
    </Button>
  );
};

export default AddButton;
