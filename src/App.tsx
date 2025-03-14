import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { themes, ThemeType } from './styles/Theme';
import { SplashScreen } from './components/SplashScreen/SplashScreen';
import { AppRoutes } from './routes/AppRoutes';
import { useAppDispatch } from './redux/store';
import { currentUser } from './redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectIsSignedIn } from './redux/auth/selectors';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [themeType, setThemeType] = useState<ThemeType>('light');
  const isSignedIn = useSelector(selectIsSignedIn);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (!isSignedIn) {
      dispatch(currentUser());
    }
  }, [dispatch, isSignedIn]);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <ThemeProvider theme={themes[themeType]}>
      {showSplash ? <SplashScreen /> : <AppRoutes toggleTheme={setThemeType} />}
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

//  ЗРОБИ ТАКІ ПРАВКИ

// 1. ЗРОБИ ЛОДЕР ЧЕРЕЗ РЕДАКС
// 2. ПОПРАВ МОДАЛКИ
// 3. ПОПРАВ ВІДОБРАЖЕННЯ СПИСКУ НА СТОРІНЦІ ПРОФІЛЮ
// 4. ЗРОБИ РЕГУЛЮВАННЯ ТЕМИ ЧЕРЕЗ РЕДАКС ТА ЗРОБИ ПЕРЕМИКАННЯ ТЕМИ ЧЕРЕЗ КНОПКУ (АБО ЩОСЬ ПРИДУМАЙ)
// 5. ЗРОБИ ФІЛЬТРИ НА NOTIES
// 6. СТИЛІЗУЙ ПОВІДОМЛЕННЯ ПРО ВІДСУТНІСТЬ СПИСКУ НА СТОРІНКАХ
