import React from 'react';
import styled from 'styled-components';
import defAvatar from '../../assets/imeges/tablet/t404.webp';
import { UserNavProps } from '../Header/Header.types';
import { LogOutButton } from '../Header/LogOutButton';

const UserNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--golden-yellow);
`;

const UserName = styled.span`
  font-weight: 500;
`;

export const UserNav: React.FC<UserNavProps> = ({
  userName,
  userAvatar,
  closeMenu,
  onLogout,
}) => {
  return (
    <UserNavContainer>
      <UserAvatar src={userAvatar || defAvatar} alt={`${userName}'s avatar`} />
      <UserName>{userName}</UserName>
      <LogOutButton onLogout={onLogout} closeMenu={closeMenu} />
    </UserNavContainer>
  );
};
