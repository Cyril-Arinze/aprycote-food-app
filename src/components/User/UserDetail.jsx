import React from 'react';

import classes from '../../styles/user-style/UserDetail.module.css';
import Avatar from '../../UI/Avatar';

// TODO:Change the hard coded userData to dynamic data using authentication
const UserData = {
  name: 'Cyril Arinze',
  Occupation: 'Research Microbiologist',
  image:
    'https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1',
};
const UserDetail = () => {
  const { name, image } = UserData;
  return (
    <div className={classes.user_detail}>
      <Avatar src={image} alt={name} />
      <div>
        <p>{name}</p>
        {/* <p>{Occupation}</p> */}
      </div>
    </div>
  );
};

export default UserDetail;
