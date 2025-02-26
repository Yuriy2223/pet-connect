import React from 'react';
import { UserAvatar, UserBarContainer, UserName } from './UserBar.styled';

export interface UserBarProps {
  userName: string;
  userAvatar: string;
}
export const UserBar: React.FC<UserBarProps> = ({ userName, userAvatar }) => {
  return (
    <UserBarContainer>
      {typeof userAvatar === 'string' ? (
        <UserAvatar src={userAvatar} alt="Avatar" />
      ) : (
        userAvatar
      )}
      <UserName>{userName}</UserName>
    </UserBarContainer>
  );
};
