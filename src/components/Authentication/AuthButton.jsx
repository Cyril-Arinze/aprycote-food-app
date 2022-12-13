import React from 'react';
import classes from '../../styles/authentication-styles/AuthButton.module.css';
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../hooks/use-auth';

const AuthButton = (props) => {
  const { logOut } = useAuth();

  const authenticationHandler = () => {
    // dispatch actions the toggle the auth state in the redux store
    logOut();
  };
  // conditional class for the auth button based on if the user is authenticated or not
  const authBtnClass = props.sideBarIsExpanded
    ? classes.auth
    : `${classes.expanded} ${classes.auth}`;
  return (
    <button onClick={authenticationHandler} className={authBtnClass}>
      {<FiLogOut />}
      <span>{'Logout'}</span>
    </button>
  );
};

export default AuthButton;
