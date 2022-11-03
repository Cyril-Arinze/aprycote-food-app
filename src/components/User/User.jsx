import { HiBell } from 'react-icons/hi';
import { RiMessengerFill } from 'react-icons/ri';
import { IoIosCart } from 'react-icons/io';
import classes from '../../styles/user-style/User.module.css';
import UserDetail from '../User/UserDetail';

const User = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.user__actions}>
        <div>
          <HiBell />
          <span>Notifications</span>
        </div>
        <div>
          <RiMessengerFill />
          <span>Messages</span>
        </div>
        <div>
          <IoIosCart />
          <span>Cart</span>
        </div>
      </div>
      <UserDetail />
    </div>
  );
};
export default User;
