import React from 'react';

import { FaTrash } from 'react-icons/fa';
import classes from '../../styles/Cart-styles/CartItem.module.css';
const CartItems = (props) => {
  return (
    <li className={classes['cart-item']}>
      <div className={classes['cart-item__image']}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={classes['cart-item__details']}>
        <div className={classes['cart-item__desc']}>
          <h4>{props.name}</h4>
          <p>
            <span>x</span> {props.quantity}
          </p>
        </div>
        <div className={classes['cart-item__action']}>
          <FaTrash />
          <p>${props.price}</p>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
