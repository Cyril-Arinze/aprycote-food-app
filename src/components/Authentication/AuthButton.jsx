import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import classes from '../../styles/authentication-styles/AuthButton.module.css';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { authActions } from '../../store/slices/auth-slice';
import { isAuthSelector } from '../../store/slices/auth-slice';

const AuthButton = (props) => {
  const isLoggedIn = useSelector(isAuthSelector); // selects the authentication state from the redux store
  const dispatch = useDispatch(); // Dispatches action to the redux store

  const authenticationHandler = () => {
    // dispatch actions the toggle the auth state in the redux store
    dispatch(authActions.toggleIsAuth());
  };
  // conditional class for the auth button based on if the user is authenticated or not
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
