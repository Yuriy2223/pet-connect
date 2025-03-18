import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { ModalUniversal } from '../../modals/UniversalModal/UniversalModal';

export const Layout = () => {
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
