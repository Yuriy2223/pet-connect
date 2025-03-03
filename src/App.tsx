import React, { Suspense, useEffect, useState } from 'react';
// import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { themes, ThemeType } from './styles/Theme';
import { Loader } from './components/loader/Loader';
// import { SplashScreen } from './components/SplashScreen/SplashScreen';
import { AppRoutes } from './routes/AppRoutes';
import { useAppDispatch } from './redux/store';
import { currentUser } from './redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectIsSignedIn } from './redux/auth/selectors';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [themeType, setThemeType] = useState<ThemeType>('light');
  // const [isAppReady, setIsAppReady] = useState(false);
  const isSignedIn = useSelector(selectIsSignedIn);

  useEffect(() => {
    if (!isSignedIn) {
      dispatch(currentUser());
    }
  }, [dispatch, isSignedIn]);

  return (
    <ThemeProvider theme={themes[themeType]}>
      <Suspense fallback={<Loader />}>
        <AppRoutes toggleTheme={setThemeType} />
      </Suspense>

      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
};

//   const dispatch = useAppDispatch();
//   const [showSplash, setShowSplash] = useState(true);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Показуємо Splash Screen протягом 3 секунд
//     const splashTimeout = setTimeout(() => {
//       setShowSplash(false);
//     }, 3000);

//     return () => clearTimeout(splashTimeout);
//   }, []);

//   useEffect(() => {
//     // Показуємо Loader протягом 2 секунд після закінчення Splash Screen
//     if (!showSplash) {
//       const loaderTimeout = setTimeout(() => {
//         setLoading(false);
//       }, 3000);

//       return () => clearTimeout(loaderTimeout);
//     }
//   }, [showSplash]);

//   // Показуємо Splash Screen, якщо showSplash == true

//   if (showSplash) {
//     return <SplashScreen />;
//   }

//   // Показуємо Loader, якщо loading == true
//   if (loading) {
//     return <Loader />;
//   }
