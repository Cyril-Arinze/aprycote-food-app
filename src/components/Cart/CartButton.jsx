import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartTotalQuantitySelector } from '../../store/slices/cart-slice';
import { UIAction } from '../../store/slices/ui-slice';

import classes from './CartButton.module.css';

function CartBtn(props) {
  const numberOfItemInCart = useSelector(cartTotalQuantitySelector);
  const dispatch = useDispatch();

  const openCartHandler = () => {
    dispatch(UIAction.toggleCart());
  };
  return (
    <div
      id="cart-btn"
      onClick={openCartHandler}
      className={classes['cart-btn']}
    >
      <div className={classes['cart-btn__inner']}>
        <span className={classes['cart-btn__badge']}>{numberOfItemInCart}</span>
        <i className=" bi bi-cart4"></i>
      </div>
    </div>
  );
}

const CartButton = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<CartBtn />, document.getElementById('floating'))}
    </>
  );
};

export default CartButton;
