import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsSignedIn,
  selectAuthLoading,
  selectIsAuthChecking,
} from '../redux/auth/selectors';

// export const RestrictedRoute = () => {
//   const isSignedIn = useSelector(selectIsSignedIn);
//   const isAuthLoading = useSelector(selectAuthLoading);
//   const isAuthChecking = useSelector(selectIsAuthChecking);
//   const location = useLocation();

//   if (isAuthLoading || isAuthChecking) return null;

//   const redirectTo = location.pathname === '/register' ? '/login' : '/profile';

//   return isSignedIn ? <Navigate to={redirectTo} replace /> : <Outlet />;
// };

export const RestrictedRoute = () => {
  const isSignedIn = useSelector(selectIsSignedIn);
  const isAuthLoading = useSelector(selectAuthLoading);
  const isAuthChecking = useSelector(selectIsAuthChecking);
  const location = useLocation();

  if (isAuthLoading || isAuthChecking) return null;

  if (isSignedIn && location.pathname === '/register') {
    return <Navigate to="/login" replace />;
  }

  return isSignedIn ? <Navigate to="/profile" replace /> : <Outlet />;
};
