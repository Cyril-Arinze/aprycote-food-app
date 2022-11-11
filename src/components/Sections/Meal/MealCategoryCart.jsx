import React from 'react';

import CartItems from '../../Cart/CartItems';
import classes from '../../../styles/sections-styles/menu category/MealCategoryCart.module.css';
import Button from '../../../UI/Buttons/Button';

const cartData = [
  {
    name: 'Mushroom pizza',
    image:
      'https://www.aberdeenskitchen.com/wp-content/uploads/2020/08/Cheesy-Pepperoni-Mushroom-Pizza-3.jpg',
    quantity: 1,
    price: 19.9,
  },
  {
    name: 'Burger',
    image: 'https://burgerburger.co.nz/wp-content/uploads/2020/01/BC.jpg',
    quantity: 1,
    price: 19.9,
  },
  {
    name: 'Spay Arrabiata',
    image:
      'https://www.aberdeenskitchen.com/wp-content/uploads/2020/08/Cheesy-Pepperoni-Mushroom-Pizza-3.jpg',
    quantity: 1,
    price: 19.9,
  },
];

const MealCategoryCart = (props) => {
  return (
    <aside className={classes.cart}>
      <h3>My Cart</h3>
      <ul className={classes.cart__items}>
        {cartData.map((item, index) => {
          return (
            <CartItems
              key={index}
              image={item.image}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
            />
          );
        })}
      </ul>
      <Button className={classes.checkout_btn}>Checkout</Button>
    </aside>
  );
};

export default MealCategoryCart;
