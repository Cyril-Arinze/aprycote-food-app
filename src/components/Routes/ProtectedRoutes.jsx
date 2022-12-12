import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isAuthSelector } from '../../store/slices/auth-slice';

const ProtectedRoutes = ({ children }) => {
  const isAuth = useSelector(isAuthSelector);
  return <>{isAuth ? children : <Navigate to="/authentication" />}</>;
};

export default ProtectedRoutes;
