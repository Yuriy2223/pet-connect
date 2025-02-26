import React from 'react';
import { LogOutButton } from '../LogOutButton';
import { UserAvatar, UserName, UserNavContainer } from './UserNav.styled';

export interface UserNavProps {
  userName: string;
  userAvatar: string | React.ReactNode;
  onLogout: () => void;
  closeMenu: () => void;
}

export const UserNav: React.FC<UserNavProps> = ({
  userName,
  userAvatar,
  closeMenu,
  onLogout,
}) => {
  return (
    <UserNavContainer>
      <LogOutButton onLogout={onLogout} closeMenu={closeMenu} />

      {typeof userAvatar === 'string' ? (
        <UserAvatar src={userAvatar} alt="Avatar" />
      ) : (
        userAvatar
      )}
      <UserName>{userName}</UserName>
    </UserNavContainer>
  );
};
