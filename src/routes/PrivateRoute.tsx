import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsSignedIn,
  selectAuthLoading,
  selectIsAuthChecking,
} from '../redux/auth/selectors';

export const PrivateRoute = () => {
  const isSignedIn = useSelector(selectIsSignedIn);
  const isAuthLoading = useSelector(selectAuthLoading);
  const isAuthChecking = useSelector(selectIsAuthChecking);

  if (isAuthLoading || isAuthChecking) return null;

  return isSignedIn ? <Outlet /> : <Navigate to="/home" replace />;
};
