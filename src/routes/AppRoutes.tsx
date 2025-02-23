import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { ThemeType } from '../styles/Theme';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage').then(m => ({ default: m.HomePage }))
);
const NewsPage = lazy(() =>
  import('../pages/NewsPage/NewsPage').then(m => ({ default: m.NewsPage }))
);
const NoticesPage = lazy(() =>
  import('../pages/NoticesPage/NoticesPage').then(m => ({
    default: m.NoticesPage,
  }))
);
const OurFriendsPage = lazy(() =>
  import('../pages/OurFriendsPage/OurFriendsPage').then(m => ({
    default: m.OurFriendsPage,
  }))
);
const RegisterPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage').then(m => ({
    default: m.RegistrationPage,
  }))
);
const LoginPage = lazy(() =>
  import('../pages/LoginPage/LoginPage').then(m => ({ default: m.LoginPage }))
);
const ProfilePage = lazy(() =>
  import('../pages/ProfilePage/ProfilePage').then(m => ({
    default: m.ProfilePage,
  }))
);
const AddPetPage = lazy(() =>
  import('../pages/AddPetPage/AddPetPage').then(m => ({
    default: m.AddPetPage,
  }))
);

interface AppRoutesProps {
  toggleTheme: (theme: ThemeType) => void;
}

export const AppRoutes: React.FC<AppRoutesProps> = ({ toggleTheme }) => {
  return (
    <Routes>
      <Route path="/" element={<Layout toggleTheme={toggleTheme} />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="friends" element={<OurFriendsPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="add-pet" element={<AddPetPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
