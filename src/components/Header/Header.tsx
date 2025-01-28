import React, { useEffect, useState } from 'react';
import { Logo } from '../Logo/Logo';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import { BurgerMenuButton, HeaderContainer, MenuIcon } from './header.styled';

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
