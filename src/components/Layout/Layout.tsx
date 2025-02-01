import React from 'react';
import { ThemeType } from '../../styles/Theme';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children?: React.ReactNode; 
  toggleTheme: (theme: ThemeType) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children || <Outlet />}</main>
    </div>
  );
};
