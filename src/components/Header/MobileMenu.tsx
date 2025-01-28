import React, { useEffect } from 'react';
import { Nav } from '../Nav/Nav';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserNav } from '../UserNav/UserNav';
import {
  CloseButton,
  CloseIcon,
  MenuWrapper,
  MobileMenuContainer,
  Overlay,
} from './header.styled';

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
  isAuthenticated: boolean;
  userName: string;
  userAvatar: string;
  onLogout: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  closeMenu,
  isAuthenticated,
  userName,
  userAvatar,
  onLogout,
}) => {
  useEffect(() => {
    // Функція для закриття меню при натисканні клавіші Escape
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    // Додаємо обробник події при монтуванні
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    // Видаляємо обробник події при демонтуванні або зміні стану
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={closeMenu} />

      <MobileMenuContainer $isOpen={isOpen}>
        <CloseButton onClick={closeMenu}>
          <CloseIcon width={32} height={32} iconName="close" />
        </CloseButton>

        <MenuWrapper>
          <Nav closeMenu={closeMenu} />

          {isAuthenticated ? (
            <AuthNav closeMenu={closeMenu} />
          ) : (
            <UserNav
              closeMenu={closeMenu}
              userName={userName}
              userAvatar={userAvatar}
              onLogout={onLogout}
            />
          )}
        </MenuWrapper>
      </MobileMenuContainer>
    </>
  );
};
