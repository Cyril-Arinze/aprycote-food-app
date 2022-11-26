import React from 'react';

import classes from '../../../styles/sections-styles/products details/ProductDetails.module.css';
import Button from '../../../UI/Buttons/Button';
import FavouriteButton from '../../../UI/Buttons/FavouriteButton';
const ProductDetails = (props) => {
  let mealIngredient = '';

  props.ingredients.map((ingredient) => {
    return (mealIngredient += ingredient.ingredient + ', ');
  });
  return (
    <div className={classes.products_details}>
      <div>
        <h1>{props.meal}</h1>
        <div>
          <p>
            <span>Ingredients</span>: {mealIngredient}
          </p>
        </div>
        <div className={classes.product_tags}>
          <div>
            <p>
              <span>Category</span>: {props.category}
            </p>
          </div>
          <div>
            <p>
              <span>Area</span>: {props.area}
            </p>
          </div>
          <div>
            <p>
              <span>Tags</span>: {props.tags}
            </p>
          </div>
        </div>

        <div className={classes.product_price}>
          <p>
            <span>Price:</span> ${props.price}
          </p>
          <p>
            <span>Meal ID:</span> {props.id}
          </p>
        </div>
      </div>
      <div>
        <FavouriteButton item={{ isFavourite: true }} />
        <Button className={classes.cart_btn}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductDetails;
