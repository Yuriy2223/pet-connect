import React from 'react';
import { Nav } from '../Nav/Nav';
import { UserNav } from '../UserNav/UserNav';
import { AuthNav } from '../AuthNav/AuthNav';
import { DesktopMenuContainer } from './Header.styled';

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
        <UserNav
          userName={userName}
          userAvatar={userAvatar}
          onLogout={onLogout}
        />
      ) : (
        <AuthNav />
      )}
    </DesktopMenuContainer>
  );
};
