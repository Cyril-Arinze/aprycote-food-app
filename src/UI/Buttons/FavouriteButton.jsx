import React from 'react';
import Button from './Button';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import classes from '../../styles/UI-styles/Button-styles/FavoriteButton.module.css';
import { useDispatch } from 'react-redux';
import { favouriteActions } from '../../store/slices/favourites-slice';
import { UIAction } from '../../store/slices/ui-slice';

const FavouriteButton = (props) => {
  const dispatch = useDispatch();

  const addToFavouriteHandler = () => {
    // this function takes the item received via props and dispatches it as an action payload for the store
    dispatch(favouriteActions.addToFavourite(props.item));
    dispatch(
      UIAction.togglePopUp({
        info: `${props.item.meal} Added to favourite`,
        icon: `bi bi-check2-circle`,
        color: 'var(--primary-orange)',
      })
    );
  };
  const removeFromFavouriteHandler = () => {
    //this function takes the item ID received via props and dispatches it as an action payload for the store
    dispatch(favouriteActions.removeFromFavourite(props.item.id));
    dispatch(
      UIAction.togglePopUp({
        info: `${props.item.meal} Removed from favourite`,
        icon: `bi bi-x-circle`,
        color: 'var(--warning)',
      })
    );
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
