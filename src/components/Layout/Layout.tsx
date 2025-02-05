import React from 'react';
import { ThemeType } from '../../styles/Theme';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { ModalUniversal } from '../../modals/UniversalModal/UniversalModal';

interface LayoutProps {
  toggleTheme: (theme: ThemeType) => void;
}

export const Layout: React.FC<LayoutProps> = () => {
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
