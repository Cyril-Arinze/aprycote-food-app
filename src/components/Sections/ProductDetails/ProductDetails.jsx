import React from 'react';
import { useSelector } from 'react-redux';
import { favouriteItemSelector } from '../../../store/slices/favourites-slice';

import classes from '../../../styles/sections-styles/products details/ProductDetails.module.css';
import AddButton from '../../../UI/Buttons/AddButton';
import Button from '../../../UI/Buttons/Button';
import FavouriteButton from '../../../UI/Buttons/FavouriteButton';
const ProductDetails = (props) => {
  const favouriteItems = useSelector(favouriteItemSelector); // get the favourite items from the store
  const favouriteItemsIDs = favouriteItems.map((item) => item.id); // return an array of IDs of all the items in the favourite
  const isFavourite = favouriteItemsIDs.includes(props.id); // check if the ID received via props is included in the array of iDs in the favourite
  const item = {
    image: props.image,
    meal: props.meal,
    price: props.price,
    quantity: 1,
    id: props.id,
    tag: props.id,
    isFavourite,
  };
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
              <span>Tags</span>: {props.tags ? props.tags : 'null'}
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
        <FavouriteButton item={item} />
        <AddButton item={item} className={classes.cart_btn}>
          Add to Cart
        </AddButton>
      </div>
    </div>
  );
};

export default ProductDetails;
