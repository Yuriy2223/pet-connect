import React, { useEffect } from 'react';
import { ThemeType } from '../../styles/Theme';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { ModalUniversal } from '../../modals/UniversalModal/UniversalModal';
import { fetchFullUserInfo } from '../../redux/user/operations';
import { useAppDispatch } from '../../redux/store';

interface LayoutProps {
  toggleTheme: (theme: ThemeType) => void;
}

export const Layout: React.FC<LayoutProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFullUserInfo());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <ModalUniversal />
    </div>
  );
};
