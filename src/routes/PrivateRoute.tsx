// import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import {
//   selectIsAuthenticated,
//   selectIsRefreshing,
// } from '../redux/auth/selectors';

// export const PrivateRoute = () => {
//   const isAuthenticated = useSelector(selectIsAuthenticated);
//   const isRefreshing = useSelector(selectIsRefreshing);

//   if (isRefreshing) return null;

//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
// };

import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsSignedIn, selectAuthLoading } from '../redux/auth/selectors';

export const PrivateRoute = () => {
  const isAuthenticated = useSelector(selectIsSignedIn);
  const isRefreshing = useSelector(selectAuthLoading);

  if (isRefreshing) return null;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
