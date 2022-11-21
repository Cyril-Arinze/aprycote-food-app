import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/slices/cart-slice';

import classes from './CartItems.module.css';

const CartItems = (props) => {
  const dispatch = useDispatch();
  const IncreaseQuantityHandler = () => {
    dispatch(cartActions.addToCart(props.item));
  };
  const decreaseQuantityHandler = () => {
    dispatch(cartActions.removeFromCart(props.item.id));
  };
  const DeleteHandler = () => {
    dispatch(cartActions.DeleteCartItem(props.item.id));
  };
  const price = props.price.toFixed(2);

  return (
    <li className={classes['cart-item']}>
      <div className={classes['cart-item__img']}>
        <img src={props.image} alt={props.meal} />
      </div>
      <div className={classes['cart-item__desc']}>
        <div>
          <p>{props.meal}</p>
          <div>
            <button onClick={IncreaseQuantityHandler}>+</button>
            <span>x {props.quantity}</span>
            <button onClick={decreaseQuantityHandler}>-</button>
          </div>
        </div>
        <span>
          <h5>${price}</h5>
        </span>
      </div>
      <div onClick={DeleteHandler} className={classes['cart-item__remove']}>
        <i className="bi bi-x-circle" />
      </div>
    </li>
  );
};

export default CartItems;
