import React from 'react';
import Button from './Button';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import classes from '../../styles/UI-styles/Button-styles/FavoriteButton.module.css';
import { useDispatch } from 'react-redux';
import { favouriteActions } from '../../store/slices/favourites-slice';

const FavouriteButton = (props) => {
  const dispatch = useDispatch();

  const addToFavouriteHandler = () => {
    // this function takes the item received via props and dispatches it as an action payload for the store
    dispatch(favouriteActions.addToFavourite(props.item));
  };
  const removeFromFavouriteHandler = () => {
    //this function takes the item ID received via props and dispatches it as an action payload for the store
    dispatch(favouriteActions.removeFromFavourite(props.item.id));
  };

  const addToFavouriteBtn = (
    <Button onClick={removeFromFavouriteHandler} className={classes.btn}>
      <AiFillHeart />
    </Button>
  );
  const removeFromFavouriteBtn = (
    <Button onClick={addToFavouriteHandler} className={classes.btn}>
      <AiOutlineHeart />
    </Button>
  );
  return (
    <div>
      {props.item.isFavourite ? addToFavouriteBtn : removeFromFavouriteBtn}
    </div>
  );
};

export default FavouriteButton;
