import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  cartItemSelector,
  cartTotalAmountSelector,
} from '../../store/slices/cart-slice';
import { UIAction } from '../../store/slices/ui-slice';
import Modal from '../../UI/Modal/Modal';
import classes from './Cart.module.css';
import CartItems from './CartItems';
import EmptyCart from './EmptyCart';

function Cart(props) {
  const dispatch = useDispatch(); // ==> dispatch hook from react redux
  const cartItems = useSelector(cartItemSelector); // getting the cart item array from the store
  const cartTotal = useSelector(cartTotalAmountSelector); // getting the cart total from the store

  //!All functions handler starts here
  // a function that closes the cart when it is opened
  const closeCartHandler = () => {
    dispatch(UIAction.toggleCart());
  };
  // a function that is trigger when the when the checkout button is clicked
  const orderHandler = () => {};
  //!functions handler ends here

  //! stored variables start here
  const totalAmount = cartTotal.toFixed(2); // set the cart total to 2 decimal points
  const cartHasItem = cartItems.length > 0; // check if there is item in the cart for conditional rendering
  // ==>list of items in the cart
  const cartItem = cartItems.map((item) => {
    return (
      <CartItems
        key={item.id}
        meal={item.meal}
        image={item.image}
        quantity={item.quantity}
        price={item.quantity * item.price}
        item={item}
      />
    );
  });
  // cart total element
  const cartTotalAmount = (
    <div className={classes['total']}>
      <p>Sub Total</p>
      <span>${totalAmount}</span>
    </div>
  );
  // cart action buttons
  const cartButtons = (
    <div className={classes['actions']}>
      <button onClick={closeCartHandler} className={classes['button--alt']}>
        <i className="bi bi-x-circle" />
      </button>
      <button className={classes['button']} onClick={orderHandler}>
        Checkout
      </button>
    </div>
  );
  // !stored variables ends here

  // returned jsx element
  return (
    <Modal onClick={closeCartHandler}>
      <ul className={classes['cart-items']}>{cartItem}</ul>
      {cartHasItem && cartTotalAmount}
      {cartHasItem && cartButtons}
      {!cartHasItem && <EmptyCart />}
    </Modal>
  );
}

export default memo(Cart);
