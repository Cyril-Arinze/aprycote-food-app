import React, { createRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartTotalQuantitySelector } from '../../store/slices/cart-slice';
import { UIAction } from '../../store/slices/ui-slice';
import Draggable from 'react-draggable';

import classes from './CartButton.module.css';

function CartBtn(props) {
  const numberOfItemInCart = useSelector(cartTotalQuantitySelector);
  const dispatch = useDispatch();
  const [itemIsAddedToCart, setItemIsAddedToCart] = useState(false);

  const openCartHandler = () => {
    dispatch(UIAction.toggleCart());
  };
  const badgeClasses = `${classes['cart-btn__badge']} ${
    itemIsAddedToCart ? classes.bump : ''
  }`;
  useEffect(() => {
    if (numberOfItemInCart === 0) {
      return;
    }
    setItemIsAddedToCart(true);
    const timer = setTimeout(() => {
      setItemIsAddedToCart(false);
    }, 800);
    return () => {
      clearTimeout(timer);
    };
  }, [numberOfItemInCart]);

  return (
    <Draggable>
      <div
        ref={createRef}
        id="cart-btn"
        onClick={openCartHandler}
        className={classes['cart-btn']}
      >
        <div className={classes['cart-btn__inner']}>
          <span className={badgeClasses}>{numberOfItemInCart}</span>
          <i className=" bi bi-cart4"></i>
        </div>
      </div>
    </Draggable>
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
