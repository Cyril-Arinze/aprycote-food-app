import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartTotalQuantitySelector } from '../../store/slices/cart-slice';
import { UIAction } from '../../store/slices/ui-slice';
import { useDrag } from 'react-use-gesture';

import classes from './CartButton.module.css';

function CartBtn(props) {
  // ! All hooks start here
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 }); // state to store the x and y coordinate of the button
  const numberOfItemInCart = useSelector(cartTotalQuantitySelector);
  const dispatch = useDispatch();
  const [itemIsAddedToCart, setItemIsAddedToCart] = useState(false);

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
  //! Hooks end here

  // ! Function handlers start here
  const btnPosFn = useDrag((params) => {
    // function that gets the coordinate of the dragged button
    setBtnPos({ x: params.offset[0], y: params.offset[1] }); // ==> this is react-use-gesture specific
  });

  const openCartHandler = () => {
    // function that opens the cart
    dispatch(UIAction.toggleCart());
  };
  // ! function handlers end here

  // ! Variables start here
  // conditional class for cart badge based on if the cart items changed
  const badgeClasses = `${classes['cart-btn__badge']} ${
    itemIsAddedToCart ? classes.bump : ''
  }`;
  //! Variables end here

  return (
    <div
      id="cart-btn"
      onClick={openCartHandler}
      className={classes['cart-btn']}
      style={{
        position: 'relative',
        top: btnPos.y,
        left: btnPos.x,
      }}
      {...btnPosFn()}
    >
      <div className={classes['cart-btn__inner']}>
        <span className={badgeClasses}>{numberOfItemInCart}</span>
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
