import React from 'react';
import styled from 'styled-components';

interface UserNavProps {
  userName: string;
  userAvatar?: string; // URL до аватарки користувача
  onLogout: () => void;
  closeMenu?: () => void; // Функція для виходу
}

const UserNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const UserBar = styled.div`
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
`;
const LogOutButton = styled.button`
  background-color: transparent;
  border: 2px solid var(--bright-red);
  color: var(--bright-red);
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--bright-red);
    color: var(--white-color);
  }
`;

export const UserNav: React.FC<UserNavProps> = ({ userName, userAvatar, onLogout,closeMenu }) => {
  const handleLogout = () => {
    onLogout(); // Викликаємо функцію для виходу
    if (closeMenu) {
      closeMenu(); // Викликаємо тільки якщо визначена
    }
  };
  return (
    <UserNavContainer>
      <UserBar>
        {userAvatar ? (
          <UserAvatar src={userAvatar} alt={`${userName}'s avatar`} />
        ) : (
          <UserAvatar src="/path/to/default-avatar.png" alt="Default avatar" />
        )}
        <UserName>{userName}</UserName>
      </UserBar>
      <LogOutButton onClick={handleLogout}>Log Out</LogOutButton>
    </UserNavContainer>
  );
};
