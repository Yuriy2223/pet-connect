import React from 'react';
import styled from 'styled-components';

interface UserBarProps {
  userName: string;
  userAvatar?: string; // URL до аватарки користувача (необов'язкове)
}

const UserBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--dark-gray);
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
  font-size: 16px;
`;

export const UserBar: React.FC<UserBarProps> = ({ userName, userAvatar }) => {
  return (
    <UserBarContainer>
      {userAvatar ? (
        <UserAvatar src={userAvatar} alt={`${userName}'s avatar`} />
      ) : (
        <UserAvatar src="/path/to/default-avatar.png" alt="Default avatar" />
      )}
      <UserName>{userName}</UserName>
    </UserBarContainer>
  );
};
