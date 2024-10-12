import { Routes, Route } from 'react-router-dom';
import React, {
  Suspense,
  // useEffect,
  useState,
} from 'react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { themes, ThemeType } from './styles/Theme';
import { Loader } from './components/loader/Loader';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
// import { SplashScreen } from './components/SplashScreen/SplashScreen';

const Layout = React.lazy(() =>
  import('./components/Layout/Layout').then(module => ({
    default: module.Layout,
  }))
);
const HomePage = React.lazy(() =>
  import('./pages/HomePage/HomePage').then(module => ({
    default: module.HomePage,
  }))
);
const NewsPage = React.lazy(() =>
  import('./pages/NewsPage/NewsPage').then(module => ({
    default: module.NewsPage,
  }))
);
// const NoticesPage = React.lazy(() =>
//   import('./pages/NoticesPage/NoticesPage').then(module => ({
//     default: module.NoticesPage,
//   }))
// );
const OurFriendsPage = React.lazy(() =>
  import('./pages/OurFriendsPage/OurFriendsPage').then(module => ({
    default: module.OurFriendsPage,
  }))
);
const RegisterPage = React.lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage').then(module => ({
    default: module.RegistrationPage,
  }))
);
const LoginPage = React.lazy(() =>
  import('./pages/LoginPage/LoginPage').then(module => ({
    default: module.LoginPage,
  }))
);
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
//   // const [loading, setLoading] = useState(true);
//   const [showSplash, setShowSplash] = useState(true);

//   const toggleTheme = (newTheme: ThemeType) => {
//     setThemeType(newTheme);
//   };

//   useEffect(() => {
//     // Показуємо Splash Screen протягом короткого часу
//     const splashTimeout = setTimeout(() => {
//       setShowSplash(false);
//     }, 3000);

//     return () => clearTimeout(splashTimeout);
//   }, []);

//   if (showSplash) {
//     return <SplashScreen />;
//   }

export const App: React.FC = () => {
  const [themeType, setThemeType] = useState<ThemeType>('light');
  // const [showSplash, setShowSplash] = useState(true);
  // const [loading, setLoading] = useState(true);

  const toggleTheme = (newTheme: ThemeType) => {
    setThemeType(newTheme);
  };

  // useEffect(() => {
  //   // Показуємо Splash Screen протягом 3 секунд
  //   const splashTimeout = setTimeout(() => {
  //     setShowSplash(false);
  //   }, 3000);

  //   return () => clearTimeout(splashTimeout);
  // }, []);

  // useEffect(() => {
  // // Показуємо Loader протягом 2 секунд після закінчення Splash Screen
  //   if (!showSplash) {
  //     const loaderTimeout = setTimeout(() => {
  //       setLoading(false);
  //     }, 3000);

  //     return () => clearTimeout(loaderTimeout);
  //   }
  // }, [showSplash]);

  // Показуємо Splash Screen, якщо showSplash == true
  // if (showSplash) {
  //   return <SplashScreen />;
  // }

  // Показуємо Loader, якщо loading == true
  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <ThemeProvider theme={themes[themeType]}>
      <Suspense fallback={<Loader />}>
        <Layout toggleTheme={toggleTheme}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            {/* <Route path="/notices" element={<NoticesPage />} /> */}
            <Route path="/friends" element={<OurFriendsPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/profile" element={<ProfilePage />} />
            <Route path="/add-pet" element={<AddPetPage />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Suspense>

      <ToastContainer
        position="top-center"
        autoClose={5000}
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
