import React, { Suspense, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { themes, ThemeType } from './styles/Theme';
import { Loader } from './components/loader/Loader';
import { SplashScreen } from './components/SplashScreen/SplashScreen';
import { useAppDispatch } from './redux/store';
import { refreshUser } from './redux/auth/operations';
import { fetchFullUserInfo } from './redux/user/operations';
import { AppRoutes } from './routes/AppRoutes';

export const App: React.FC = () => {
  const [themeType, setThemeType] = useState<ThemeType>('light');
  const [isAppReady, setIsAppReady] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initializeApp = async () => {
      const result = await dispatch(refreshUser()).unwrap();
      if (result?.token) {
        await dispatch(fetchFullUserInfo()).unwrap();
      }
      setTimeout(() => setIsAppReady(true), 3000);
    };

    initializeApp();
  }, [dispatch]);

  if (!isAppReady) {
    return <SplashScreen />;
  }

  return (
    <ThemeProvider theme={themes[themeType]}>
      <Suspense fallback={<Loader />}>
        <AppRoutes toggleTheme={setThemeType} />
      </Suspense>

      <ToastContainer
        // position="top-center"
        autoClose={3000}
        hideProgressBar={false}
      />
    </ThemeProvider>
  );
};

// import { Routes, Route, Navigate } from 'react-router-dom';
// import React, { Suspense, useEffect, useState } from 'react';
// import { ToastContainer } from 'react-toastify';
// import { ThemeProvider } from 'styled-components';
// import { themes, ThemeType } from './styles/Theme';
// import { Loader } from './components/loader/Loader';
// import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
// import { PrivateRoute } from './routes/PrivateRoute';
// import { SplashScreen } from './components/SplashScreen/SplashScreen';
// import 'react-toastify/dist/ReactToastify.css';
// import { useAppDispatch } from './redux/store';
// import { refreshUser } from './redux/auth/operations';
// import { fetchFullUserInfo } from './redux/user/operations';

// const Layout = React.lazy(() =>
//   import('./components/Layout/Layout').then(module => ({
//     default: module.Layout,
//   }))
// );
// const HomePage = React.lazy(() =>
//   import('./pages/HomePage/HomePage').then(module => ({
//     default: module.HomePage,
//   }))
// );
// const NewsPage = React.lazy(() =>
//   import('./pages/NewsPage/NewsPage').then(module => ({
//     default: module.NewsPage,
//   }))
// );
// const NoticesPage = React.lazy(() =>
//   import('./pages/NoticesPage/NoticesPage').then(module => ({
//     default: module.NoticesPage,
//   }))
// );
// const OurFriendsPage = React.lazy(() =>
//   import('./pages/OurFriendsPage/OurFriendsPage').then(module => ({
//     default: module.OurFriendsPage,
//   }))
// );
// const RegisterPage = React.lazy(() =>
//   import('./pages/RegistrationPage/RegistrationPage').then(module => ({
//     default: module.RegistrationPage,
//   }))
// );
// const LoginPage = React.lazy(() =>
//   import('./pages/LoginPage/LoginPage').then(module => ({
//     default: module.LoginPage,
//   }))
// );
// const ProfilePage = React.lazy(() =>
//   import('./pages/ProfilePage/ProfilePage').then(module => ({
//     default: module.ProfilePage,
//   }))
// );
// const AddPetPage = React.lazy(() =>
//   import('./pages/AddPetPage/AddPetPage').then(module => ({
//     default: module.AddPetPage,
//   }))
// );

// export const App: React.FC = () => {
//   const [themeType, setThemeType] = useState<ThemeType>('light');
//   const toggleTheme = (newTheme: ThemeType) => {
//     setThemeType(newTheme);
//   };
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

//   useEffect(() => {
//     dispatch(fetchFullUserInfo());
//   }, [dispatch]);

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return (
//     <ThemeProvider theme={themes[themeType]}>
//       <Suspense fallback={<Loader />}>
//         <Routes>
//           <Route path="/" element={<Layout toggleTheme={toggleTheme} />}>
//             <Route index element={<HomePage />} />
//             <Route path="home" element={<Navigate to="/" replace />} />
//             <Route path="/register" element={<RegisterPage />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/news" element={<NewsPage />} />
//             <Route path="/notices" element={<NoticesPage />} />
//             <Route path="/friends" element={<OurFriendsPage />} />

//             <Route element={<PrivateRoute />}>
//               <Route path="/profile" element={<ProfilePage />} />
//               <Route path="/add-pet" element={<AddPetPage />} />
//             </Route>

//             <Route path="*" element={<NotFoundPage />} />
//           </Route>
//         </Routes>
//       </Suspense>

//       <ToastContainer
//         position="top-center"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//     </ThemeProvider>
//   );
// };
