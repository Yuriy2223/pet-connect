import React from 'react';
import { Nav } from '../Nav/Nav';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserNav } from '../UserNav/UserNav';
import { DesktopMenuContainer } from './header.styled';

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
