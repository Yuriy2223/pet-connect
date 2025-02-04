import React, { useEffect } from 'react';
import { BurgerMenuProps } from './BurgerMenu.types';
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
// import { useDispatch } from 'react-redux';

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  isOpen,
  closeMenu,
  isAuthenticated,
  onLogout,
}) => {
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

  // const dispatch = useDispatch();
  // const handleLogoutClick = useCallback(() => {
  //   dispatch(
  //     openModal({ type: 'ModalApproveAction', props: { actionType: 'logout' } })
  //   );
  // }, [dispatch]);

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
          </BurgerMenuNav>
          {isAuthenticated ? (
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
