import { useState, useRef } from 'react';
import { useAuth } from '../../hooks/use-auth';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import Button from '../../UI/Buttons/Button';

import classes from '../../styles/authentication-styles/SignUp.module.css';
const SignUp = () => {
  const emailRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [passwordNotMatch, setPasswordNotMatch] = useState(false);
  const { signInWithGoogle, signInWithFacebook, emailAndPassword, isLoading } =
    useAuth();

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    let userInput;
    if (isLoggingIn) {
      userInput = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
    } else {
      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        setPasswordNotMatch(true);
        return;
      }
      setPasswordNotMatch(false);
      userInput = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        username: userNameRef.current.value,
      };
    }
    emailAndPassword(isLoggingIn, userInput);
  };

  const formClass = isLoggingIn
    ? classes.form
    : `${classes.form} ${classes.sign_up}`;

  return (
    <div className={classes.wrapper}>
      <div className={classes.form_container}>
        <div className={classes.form_header}>
          <h1>{isLoggingIn ? 'Login' : 'Sign Up'}</h1>
          <p>
            {isLoggingIn
              ? 'Log into your Aprycote account'
              : 'Create Your Aprycote Account'}
          </p>
        </div>
        <form className={formClass} onSubmit={formSubmitHandler}>
          <div className={classes.form_group}>
            <label htmlFor="email">E-mail</label>
            <input
              ref={emailRef}
              type="email"
              placeholder="example@email.com"
              required
            />
          </div>
          {!isLoggingIn && (
            <div className={classes.form_group}>
              <label htmlFor="username">Username</label>
              <input
                ref={userNameRef}
                type="text"
                placeholder="Enter preferred username"
                required
              />
            </div>
          )}
          <div className={classes.form_group}>
            <label htmlFor="Password">Password</label>
            <input
              ref={passwordRef}
              type="password"
              placeholder="Atleast 7 character long"
              required
            />
          </div>
          {!isLoggingIn && (
            <div className={classes.form_group}>
              <label htmlFor="Confirm password">Confirm Password</label>
              <input
                ref={confirmPasswordRef}
                type="password"
                placeholder="Confirm Password"
                required
              />
            </div>
          )}
          {!isLoggingIn && passwordNotMatch && (
            <p className={classes.password_error}>Passwords don't match</p>
          )}
          <Button disable={isLoading} className={classes.form_actions}>
            {isLoading ? 'Logging In....' : isLoggingIn ? 'Login' : 'Sign Up'}
          </Button>
          <div className={classes.login_alt}>
            <div>
              <hr />
              <p>Or</p>
              <hr />
            </div>
            <div className={classes.alt_text}>
              <p>Login with other accounts</p>
            </div>
            <div className={classes.alt_buttons}>
              <Button
                disable={isLoading}
                onClick={() => {
                  signInWithGoogle();
                }}
              >
                <FaGoogle />
                Google
              </Button>
              <Button
                disable={isLoading}
                onClick={() => {
                  signInWithFacebook();
                }}
              >
                <FaFacebook />
                Facebook
              </Button>
            </div>
          </div>
        </form>
        <div className={classes.form_alt}>
          <p>
            {isLoggingIn
              ? 'Do not have an Account?'
              : 'Already have an account?'}
          </p>
          <button
            onClick={() => {
              setIsLoggingIn((prevState) => !prevState);
            }}
          >
            {isLoggingIn ? 'Sign Up' : 'Login In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
