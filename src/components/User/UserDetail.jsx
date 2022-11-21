import React from 'react';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../store/slices/auth-slice';

import classes from '../../styles/user-style/UserDetail.module.css';
import Avatar from '../../UI/Avatar';

// TODO:Change the hard coded userData to dynamic data using authentication
const UserDetail = () => {
  const userData = useSelector(userDataSelector);

  return (
    <div className={classes.user_detail}>
      <Avatar src={userData.image} alt={userData.name} />
      <div>
        <p>{userData.name}</p>
        {/* <p>{Occupation}</p> */}
      </div>
    </div>
  );
};

export default UserDetail;
