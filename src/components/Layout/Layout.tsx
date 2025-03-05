import React, { Suspense } from 'react';
import { ThemeType } from '../../styles/Theme';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { ModalUniversal } from '../../modals/UniversalModal/UniversalModal';
import { Loader } from '../loader/Loader';

interface LayoutProps {
  toggleTheme: (theme: ThemeType) => void;
}

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ModalUniversal />
    </div>
  );
};
