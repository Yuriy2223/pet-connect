import React from 'react';
import styled from 'styled-components';
import { Nav } from '../Nav/Nav';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserNav } from '../UserNav/UserNav';

const DesktopMenuContainer = styled.nav`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
  }
`;

interface DesktopMenuProps {
  isAuthenticated: boolean;
  userName: string;
  userAvatar: string;
  onLogout: () => void;
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({
  isAuthenticated,
  userName,
  userAvatar,
  onLogout,
}) => {
  return (
    <DesktopMenuContainer>
      <Nav />
      {isAuthenticated ? (
        <AuthNav />
      ) : (
        <UserNav
          userName={userName}
          userAvatar={userAvatar}
          onLogout={onLogout}
        />
      )}
    </DesktopMenuContainer>
  );
};
