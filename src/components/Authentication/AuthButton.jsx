import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import classes from '../../styles/authentication-styles/AuthButton.module.css';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { authActions } from '../../store/slices/auth-slice';
import { isAuthSelector } from '../../store/slices/auth-slice';

const AuthButton = (props) => {
  const isLoggedIn = useSelector(isAuthSelector);
  const dispatch = useDispatch();

  const authenticationHandler = () => {
    dispatch(authActions.toggleIsAuth());
  };
  const authBtnClass = props.sideBarIsExpanded
    ? classes.auth
    : `${classes.expanded} ${classes.auth}`;
  return (
    <button onClick={authenticationHandler} className={authBtnClass}>
      {isLoggedIn ? <FiLogOut /> : <FiLogIn />}
      <span>{isLoggedIn ? 'Logout' : 'Login'}</span>
    </button>
  );
};

export default AuthButton;
