import React from 'react';
import emptyCartImg from '../../assets/cart1.png';
import classes from './EmptyCart.module.css';

const EmptyCart = () => {
  return (
    <div className={classes['empty-cart']}>
      <img src={emptyCartImg} alt="Empty Cart" />
      <h3>Your cart is empty</h3>
      <p>Abeg buy food chop make hunger no finish you!</p>
    </div>
  );
};

export default EmptyCart;
