import React from 'react';

import AddButton from '../../../UI/Buttons/AddButton';
import classes from '../../../styles/sections-styles/menu category/AvailableMealItem.module.css';
import FavouriteButton from '../../../UI/Buttons/FavouriteButton';
import { favouriteItemSelector } from '../../../store/slices/favourites-slice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AvailableMealItem = (props) => {
  const navigate = useNavigate();
  const favouriteItems = useSelector(favouriteItemSelector); // get the favourite items from the store
  const favouriteItemsIDs = favouriteItems.map((item) => item.id); // return an array of IDs of all the items in the favourite
  const isFavourite = favouriteItemsIDs.includes(props.id); // check if the ID received via props is included in the array of iDs in the favourite
  const item = {
    image: props.image,
    meal: props.meal,
    price: props.price,
    quantity: 1,
    id: props.id,
    tag: props.tags,
    isFavourite,
  };
  return (
    <li className={classes.meal_item}>
      <div
        className={classes['meal_item-link']}
        onClick={() => {
          navigate(`/home/meal-details/${props.id}?meal=${props.meal}`);
        }}
      >
        <div className={classes['meal_item-image']}>
          <img src={props.image} alt={props.meal} />
        </div>
        <div className={classes['meal_item-details']}>
          <div className={classes['meal_item-desc']}>
            <p className={classes['meal_item-name']}>{props.meal}</p>
            <p className={classes['meal_item-tag']}>
              <span>ID:</span> {props.tags}
            </p>
            <p className={classes['meal_item-price']}>$ {props.price}</p>
          </div>
        </div>
      </div>
      <div className={classes['meal_item-action']}>
        <FavouriteButton item={item} />
        <AddButton item={item} />
      </div>
    </li>
  );
};
export default AvailableMealItem;
