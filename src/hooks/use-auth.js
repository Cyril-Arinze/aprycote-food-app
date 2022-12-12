import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  FacebookAuthProvider,
} from 'firebase/auth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { authActions } from '../store/slices/auth-slice';
import { UIAction } from '../store/slices/ui-slice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const facebookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const ErrorHandler = (error) => {
    const errorMessage = error.message.slice(22, error.message.length - 2);
    const TransformedErrorMessage = errorMessage.replace(/-/g, ' ');

    dispatch(
      UIAction.togglePopUp({
        info: TransformedErrorMessage,
        icon: `bi bi-x-circle`,
        color: 'var(--warning)',
      })
    );
  };
  const successHandler = (message) => {
    dispatch(
      UIAction.togglePopUp({
        info: message,
        icon: `bi bi-check2-circle`,
        color: 'var(--primary-orange)',
      })
    );
  };

  const emailAndPassword = async (isLogging = true, userInputData) => {
    if (isLogging) {
      try {
        setIsLoading(true);
        await signInWithEmailAndPassword(
          auth,
          userInputData.email,
          userInputData.password
        );
        successHandler(`You've successfully logged out`);
        navigate('/');
      } catch (error) {
        ErrorHandler(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        setIsLoading(true);
        await createUserWithEmailAndPassword(
          auth,
          userInputData.email,
          userInputData.password
        );
        await updateProfile(auth.currentUser, {
          displayName: userInputData.username,
        });

        successHandler(`Sign up successfully, You've been Logged in`);
        navigate('/');
      } catch (error) {
        ErrorHandler(error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  const signInWithFacebook = async () => {
    try {
      setIsLoading(true);
      const userDetails = await signInWithPopup(auth, facebookProvider);

      successHandler(`Logged in as ${userDetails.user.displayName}`);
      navigate('/');
    } catch (error) {
      ErrorHandler(error);
    } finally {
      setIsLoading(false);
    }
  };
  const signInWithGoogle = async () => {
    try {
      setIsLoading(true);
      const userDetails = await signInWithPopup(auth, googleProvider);

      successHandler(`Logged in as ${userDetails.user.displayName}`);

      navigate('/');
    } catch (error) {
      ErrorHandler(error);
    } finally {
      setIsLoading(false);
    }
  };
  const verifyAuthStatus = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(authActions.toggleIsAuth(true));
        dispatch(
          authActions.setUser({
            name: user.displayName,
            image: user.photoURL,
          })
        );
      } else {
        dispatch(authActions.toggleIsAuth(false));
        dispatch(
          authActions.setUser({
            name: 'Quest',
          })
        );
      }
    });
  };
  const logOut = async () => {
    try {
      await signOut(auth);
      successHandler(`You've successfully Logged out`);
    } catch (error) {
      ErrorHandler(error);
    }
  };

  return {
    isLoading,
    emailAndPassword,
    signInWithFacebook,
    signInWithGoogle,
    verifyAuthStatus,
    logOut,
  };
};
