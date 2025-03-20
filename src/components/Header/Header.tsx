import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsSignedIn } from '../../redux/auth/selectors';
import { openModal } from '../../redux/modal/slice';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserNav } from '../UserNav/UserNav';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { selectUserProfile } from '../../redux/user/selectors';
import {
  AvatarDefaultIcon,
  AvatarWrapHeader,
  BurgerMenuButton,
  HeaderContainer,
  HeaderMenuNav,
  MenuIcon,
} from './Header.styled';
// import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsSignedIn);
  const userProfile = useSelector(selectUserProfile);
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
        {isAuth ? (
          // <NavLink to="/profile">
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
          // </NavLink>
          <AuthNav />
        )}
        <BurgerMenuButton onClick={toggleMenu}>
          <MenuIcon width={32} height={32} iconName="menu" />
        </BurgerMenuButton>
      </HeaderMenuNav>
      <BurgerMenu
        isOpen={isMenuOpen}
        isAuth={isAuth}
        onLogout={() => dispatch(openModal({ type: 'ModalApproveAction' }))}
        closeMenu={closeMenu}
      />
    </HeaderContainer>
  );
};
