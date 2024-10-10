import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Iconsvg } from '../Common/Icons';
import { Nav } from '../Nav/Nav';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserNav } from '../UserNav/UserNav';

const MobileMenuContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 60%;
  height: 100vh;
  background-color: ${({ theme }) => theme.primaryDark};
  transition: right 700ms ease;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 40px 20px 40px;
`;
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 70%;
`;
const Overlay = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
  z-index: 3;
`;
const CloseButton = styled.button`
  padding: 6px;
  position: absolute;
  top: 28px;
  right: 20px;
  border: none;
  background: transparent;

  &:hover,
  &:active {
    transform: scale(1.2);
  }
`;
const CloseIcon = styled(Iconsvg)`
  width: 32px;
  height: 32px;
  stroke: ${({ theme }) => theme.white};
`;

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
          <Nav closeMenu={closeMenu}/>

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
