import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsSignedIn } from '../redux/auth/selectors';

export const RestrictedRoute = () => {
  const isSignedIn = useSelector(selectIsSignedIn);
  // const isAuthLoading = useSelector(selectAuthLoading);
  const location = useLocation();

  // if (isAuthLoading) return null;

  const redirectTo = location.pathname === '/register' ? '/login' : '/profile';

  return isSignedIn ? <Navigate to={redirectTo} replace /> : <Outlet />;
};
