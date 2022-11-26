import React from 'react';

import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/slices/cart-slice';
import classes from '../../../styles/Cart-styles/CartItem.module.css';
import Button from '../../../UI/Buttons/Button';
const CartItems = (props) => {
  const dispatch = useDispatch(); // ==> dispatch hook from react redux

  //! All function handlers start here

  const addToCartHandler = () => {
    // dispatch an action to the redux store with an object as the payload
    dispatch(
      cartActions.addToCart({
        image: props.image,
        meal: props.meal,
        price: props.price,
        id: props.id,
      })
    );
  };
  const removeFromCartHandler = () => {
    // dispatch an action to the redux store with an ID as the payload
    dispatch(cartActions.removeFromCart(props.id));
  };
  const deleteFromCartHandler = () => {
    // dispatch an action to the redux store with an ID as the payload
    dispatch(cartActions.DeleteCartItem(props.id));
  };
  // ! function Handlers end here

  // returned jsx element
  return (
    <li className={classes['cart-item']}>
      <div className={classes['cart-item__image']}>
        <img src={props.image} alt={props.meal} />
      </div>
      <div className={classes['cart-item__details']}>
        <span />
        <div className={classes['cart-item__desc']}>
          <div className={classes.meal_name}>
            <h4>{props.meal}</h4>
          </div>
          <div>
            <Button onClick={addToCartHandler} className={classes.btn}>
              +
            </Button>
            <p>
              <span>x</span> {props.quantity}
            </p>
            <Button onClick={removeFromCartHandler} className={classes.btn}>
              -
            </Button>
          </div>
        </div>
        <div className={classes['cart-item__action']}>
          <div onClick={deleteFromCartHandler}>
            <FaTrash />
          </div>
          <p>${props.price}</p>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
