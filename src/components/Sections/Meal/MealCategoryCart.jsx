import React from 'react';

import CartItems from './CartItems';
import classes from '../../../styles/sections-styles/menu category/MealCategoryCart.module.css';
import Button from '../../../UI/Buttons/Button';
import { useSelector } from 'react-redux';
import { cartItemSelector } from '../../../store/slices/cart-slice';
import EmptyCart from '../../Cart/EmptyCart';

const MealCategoryCart = (props) => {
  const cartItems = useSelector(cartItemSelector);
  const cartHasItem = cartItems.length > 0;
  const cartItemsList = (
    <ul className={classes.cart__items}>
      {cartItems.map((item) => {
        return (
          <CartItems
            key={item.id}
            image={item.image}
            meal={item.meal}
            quantity={item.quantity}
            price={item.price}
            id={item.id}
          />
        );
      })}
    </ul>
  );
  const emptyCart = <EmptyCart />;
  return (
    <aside className={classes.cart}>
      <h3>My Cart</h3>
      {cartHasItem ? cartItemsList : emptyCart}
      {cartHasItem && (
        <Button className={classes.checkout_btn}>Checkout</Button>
      )}
    </aside>
  );
};

export default MealCategoryCart;
