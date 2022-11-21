import { HiBell } from 'react-icons/hi';
import { RiMessengerFill } from 'react-icons/ri';
import { IoIosCart } from 'react-icons/io';
import classes from '../../styles/user-style/UserProfile.module.css';
import UserDetail from './UserDetail';
import { useDispatch, useSelector } from 'react-redux';
import { UIAction } from '../../store/slices/ui-slice';
import { cartTotalQuantitySelector } from '../../store/slices/cart-slice';

const UserProfile = (props) => {
  const dispatch = useDispatch();
  const NumberOfItemsInCart = useSelector(cartTotalQuantitySelector);
  const openCartHandler = () => {
    dispatch(UIAction.toggleCart());
  };
  return (
    <div className={classes.user}>
      <div className={classes.user__actions}>
        <div>
          <div>
            <span className={classes.action_badge}>0</span>
            <HiBell />
          </div>
          <span>Notifications</span>
        </div>
        <div>
          <div>
            <span className={classes.action_badge}>0</span>
            <RiMessengerFill />
          </div>
          <span>Messages</span>
        </div>
        <div onClick={openCartHandler}>
          <div>
            <span className={classes.action_badge}>{NumberOfItemsInCart}</span>
            <IoIosCart />
          </div>
          <span>Cart</span>
        </div>
      </div>
      <UserDetail />
    </div>
  );
};
export default UserProfile;
