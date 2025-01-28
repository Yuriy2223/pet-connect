import React from 'react';
import { Nav } from '../Nav/Nav';
import { UserNav } from '../UserNav/UserNav';
import { DesktopMenuContainer } from './header.styled';
import { AuthNav } from '../AuthNav/AuthNav';

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
