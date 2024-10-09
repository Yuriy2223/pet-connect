import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Logo } from '../Logo/Logo';
import { Container } from '../Common/Container';
import { Iconsvg } from '../Common/Icons';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 34px 20px 0;
  border: 1px solid red;
`;
const BurgerMenuButton = styled.button`
  display: block;
  background: none;
  outline: none;
  border: none;
  margin-left: 12px;

  @media (min-width: 768px) {
    margin-left: 16px;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;
const MenuIcon = styled(Iconsvg)`
  width: 32px;
  height: 32px;
  stroke: ${({ theme }) => theme.black};
`;

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = true; // Змінюється в залежності від стану авторизації

  // Зразок даних користувача
  const userName = 'John Doe';
  const userAvatar = '/path/to/avatar.jpg';

  // Функція для виходу з облікового запису
  const handleLogout = () => {
    // Логіка виходу (очищення локального стану, видалення токена)
    console.log('User logged out');
  };

  // Функція для відкриття/закриття меню
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Функція для закриття меню
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <HeaderContainer>
      <Logo />

      <BurgerMenuButton onClick={toggleMenu}>
        <MenuIcon width={32} height={32} iconName="menu" />
      </BurgerMenuButton>

      <MobileMenu
        isOpen={isMenuOpen}
        closeMenu={closeMenu}
        isAuthenticated={isAuthenticated}
        userName={userName}
        userAvatar={userAvatar}
        onLogout={handleLogout}
      />

      <DesktopMenu
        isAuthenticated={isAuthenticated}
        userName={userName}
        userAvatar={userAvatar}
        onLogout={handleLogout}
      />
    </HeaderContainer>
  );
};
