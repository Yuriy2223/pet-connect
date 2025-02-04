import React from 'react';
import styled from 'styled-components';
import { UserNavProps } from '../Header/Header.types';

const UserBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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

export const UserBar: React.FC<UserNavProps> = ({ userName, userAvatar }) => {
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
