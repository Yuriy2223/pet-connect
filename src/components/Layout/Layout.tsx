import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { ModalUniversal } from '../../modals/UniversalModal/UniversalModal';
import styled from 'styled-components';

const StyledHr = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.primaryDark};
  margin: 0;
`;

export const Layout = () => {
  return (
    <div>
      <Header />
      <StyledHr />
      <main>
        <Outlet />
      </main>
      <ModalUniversal />
    </div>
  );
};
