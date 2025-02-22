import React, {
  useCallback,
  // useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsSignedIn,
  // selectUser
} from '../../redux/auth/selectors';
import { openModal } from '../../redux/modal/slice';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserNav } from '../UserNav/UserNav';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import {
  AvatarDefaultIcon,
  AvatarWrapHeader,
  BurgerMenuButton,
  HeaderContainer,
  HeaderMenuNav,
  MenuIcon,
} from './Header.styled';
import { selectUserProfile } from '../../redux/user/selectors';

export const Header: React.FC = () => {
  const isAuthenticated = useSelector(selectIsSignedIn);
  const userProfile = useSelector(selectUserProfile); /** */
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <HeaderContainer>
      <Logo />
      <Nav />
      <HeaderMenuNav>
        {isAuthenticated ? (
          <UserNav
            userName={userProfile?.name || 'User'}
            userAvatar={
              <AvatarWrapHeader>
                {userProfile?.avatar ? (
                  <img src={userProfile.avatar} alt="User avatar" />
                ) : (
                  <AvatarDefaultIcon iconName="user" />
                )}
              </AvatarWrapHeader>
            }
            onLogout={() => dispatch(openModal({ type: 'ModalApproveAction' }))}
            closeMenu={closeMenu}
          />
        ) : (
          <AuthNav />
        )}
        <BurgerMenuButton onClick={toggleMenu}>
          <MenuIcon width={32} height={32} iconName="menu" />
        </BurgerMenuButton>
      </HeaderMenuNav>
      <BurgerMenu
        isOpen={isMenuOpen}
        isAuthenticated={isAuthenticated}
        onLogout={() => dispatch(openModal({ type: 'ModalApproveAction' }))}
        closeMenu={closeMenu}
      />
    </HeaderContainer>
  );
};
