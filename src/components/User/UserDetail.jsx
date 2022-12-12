import React from 'react';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../store/slices/auth-slice';

import classes from '../../styles/user-style/UserDetail.module.css';
import Avatar from '../../UI/Avatar';

// TODO:Change the hard coded userData to dynamic data using authentication
const UserDetail = () => {
  const userData = useSelector(userDataSelector);
  const defaultProfilePic =
    'https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1';

  return (
    <div className={classes.user_detail}>
      <Avatar
        src={userData.image ? userData.image : defaultProfilePic}
        alt={userData.name}
      />
      <div>
        <p>{userData.name}</p>
      </div>
    </div>
  );
};

export default UserDetail;
