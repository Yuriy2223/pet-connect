import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Logo } from '../Logo/Logo';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import { useAppDispatch } from '../../redux/store';
import { selectIsSignedIn, selectUser } from '../../redux/auth/selectors';
import { logoutUser } from '../../redux/auth/operations';
import { BurgerMenuButton, HeaderContainer, MenuIcon } from './Header.styled';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = useSelector(selectIsSignedIn);
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

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
        userName={user?.name || ''}
        userAvatar={user?.avatar || ''}
        onLogout={handleLogout}
      />

      <DesktopMenu
        isAuthenticated={isAuthenticated}
        userName={user?.name || ''}
        userAvatar={user?.avatar || ''}
        onLogout={handleLogout}
      />
    </HeaderContainer>
  );
};
