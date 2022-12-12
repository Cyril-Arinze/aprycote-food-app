import { HiBell } from 'react-icons/hi';
import { IoIosCart } from 'react-icons/io';
import { RiMessengerFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthSelector } from '../../store/slices/auth-slice';
import { cartTotalQuantitySelector } from '../../store/slices/cart-slice';
import { UIAction } from '../../store/slices/ui-slice';

import classes from '../../styles/user-style/UserProfile.module.css';
import UserDetail from './UserDetail';
import Button from '../../UI/Buttons/Button';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const dispatch = useDispatch();
  const NumberOfItemsInCart = useSelector(cartTotalQuantitySelector);
  const isAuth = useSelector(isAuthSelector);
  const navigate = useNavigate();

  const openCartHandler = () => {
    dispatch(UIAction.toggleCart());
  };
  const loginHandler = () => {
    navigate('/authentication');
  };
  return (
    <div className={classes.user}>
      <div className={classes.user__actions}>
        {isAuth && (
          <div>
            <div>
              <span className={classes.action_badge}>0</span>
              <HiBell />
            </div>
            <span>Notifications</span>
          </div>
        )}
        {isAuth && (
          <div>
            <div>
              <span className={classes.action_badge}>0</span>
              <RiMessengerFill />
            </div>
            <span>Messages</span>
          </div>
        )}
        <div onClick={openCartHandler}>
          <div>
            <span className={classes.action_badge}>{NumberOfItemsInCart}</span>
            <IoIosCart />
          </div>
          <span>Cart</span>
        </div>
      </div>
      {isAuth ? (
        <UserDetail />
      ) : (
        <Button onClick={loginHandler} className={classes.login}>
          Login
        </Button>
      )}
    </div>
  );
};
export default UserProfile;
