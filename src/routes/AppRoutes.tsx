import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';

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

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="news" element={<NewsPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="friends" element={<OurFriendsPage />} />

        <Route element={<RestrictedRoute />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="add-pet" element={<AddPetPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
