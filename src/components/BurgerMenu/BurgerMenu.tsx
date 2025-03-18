import React, { useEffect } from 'react';
import {
  CloseButton,
  CloseIcon,
  BurgerMenuContainer,
  Overlay,
  BurgerMenuNav,
  BurgerMenuNavLink,
  BurgerMenuInner,
  LogoutButton,
  AuthButtonWrapper,
  AuthButton,
} from './BurgerMenu.styled';
import { ThemeSelector } from '../Theme/ThemeSelector';

export const BurgerMenu: React.FC<{
  isOpen: boolean;
  isAuth: boolean;
  closeMenu: () => void;
  onLogout: () => void;
}> = ({ isOpen, closeMenu, isAuth, onLogout }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={closeMenu} />
      <BurgerMenuContainer $isOpen={isOpen}>
        <CloseButton onClick={closeMenu}>
          <CloseIcon width={32} height={32} iconName="close" />
        </CloseButton>
        <BurgerMenuInner>
          <BurgerMenuNav>
            <BurgerMenuNavLink to="/news" onClick={closeMenu}>
              News
            </BurgerMenuNavLink>
            <BurgerMenuNavLink to="/notices" onClick={closeMenu}>
              Notices
            </BurgerMenuNavLink>
            <BurgerMenuNavLink to="/friends" onClick={closeMenu}>
              Our Friends
            </BurgerMenuNavLink>
            <ThemeSelector />
          </BurgerMenuNav>
          {isAuth ? (
            <LogoutButton
              onClick={() => {
                onLogout();
                closeMenu();
              }}
            >
              Log Out
            </LogoutButton>
          ) : (
            <AuthButtonWrapper>
              <AuthButton to="/login" onClick={closeMenu}>
                Log In
              </AuthButton>
              <AuthButton to="/register" onClick={closeMenu}>
                Registration
              </AuthButton>
            </AuthButtonWrapper>
          )}
        </BurgerMenuInner>
      </BurgerMenuContainer>
    </>
  );
};
