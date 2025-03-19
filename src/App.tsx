import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SplashScreen } from './components/SplashScreen/SplashScreen';
import { AppRoutes } from './routes/AppRoutes';
import { useAppDispatch } from './redux/store';
import { currentUser } from './redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectIsSignedIn } from './redux/auth/selectors';
import { fetchFullUserInfo } from './redux/user/operations';
import { fetchCityLocations } from './redux/cities/operations';
import {
  fetchNoticesCategories,
  fetchNoticesSexes,
  fetchNoticesSpecies,
} from './redux/notices/operations';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);
  const [showSplash, setShowSplash] = useState(true);
  const isFirstRender = useRef(true);

  // useEffect(() => {
  //   if (!isSignedIn) {
  //     dispatch(currentUser());
  //   }
  // }, [dispatch, isSignedIn]);

  const fetchFiltersData = useCallback(() => {
    dispatch(fetchNoticesCategories());
    dispatch(fetchNoticesSpecies());
    dispatch(fetchNoticesSexes());
    dispatch(fetchCityLocations());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstRender.current) {
      fetchFiltersData();
      isFirstRender.current = false;
    }
  }, [fetchFiltersData]);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  useEffect(() => {
    if (isSignedIn) {
      dispatch(fetchFullUserInfo());
    }
  }, [dispatch, isSignedIn]);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <>
      {showSplash ? <SplashScreen /> : <AppRoutes />}
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
    </>
  );
};

//  ЗРОБИ ТАКІ ПРАВКИ

// 1. ЗРОБИ СТИЛІЗАЦІЮ В НОВИНАХ ТА ПОВІДОМЛЕНЯХ ПІСТОЇ СТОРІНКИ (<p>No notices available.</p> ...) ТА ПОПРАВ ВИПАДАЮЧИЙ СПИСОК ЛОКАЦІЙ
// 2. ПОПРАВ МОДАЛКИ
// 3. ПОПРАВ ВІДОБРАЖЕННЯ СПИСКУ НА СТОРІНЦІ ПРОФІЛЮ
// 4. ЗРОБИ РЕГУЛЮВАННЯ ТЕМИ ЧЕРЕЗ РЕДАКС ТА ЗРОБИ ПЕРЕМИКАННЯ ТЕМИ ЧЕРЕЗ КНОПКУ (АБО ЩОСЬ ПРИДУМАЙ)
// 5. ПОПРАВ НА СТОРІНКІ ADD PET ФОРМУ
// 6. СТИЛІЗУЙ ПОВІДОМЛЕННЯ ПРО ВІДСУТНІСТЬ СПИСКУ НА СТОРІНКАХ
// 7. ПОПРАВ СТИЛІЗАЦІЮ КАРТОЧКИ НОВИН та друзів Our friends
// 8. ПОМИЛКИ В УСІХ ФОРМАХ
// 9. НА СТОРІНКАХ РЕГІСТРАЦІЇ ЗРОБИ ПОВІДОМЛЕННЯ НА КАРТИНКАХ
// 0.0.0. ОПТИМІЗАЦІЯ ПРОЄКТУ
