import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsSignedIn, selectUser } from '../../redux/auth/selectors';
import { logoutUser } from '../../redux/auth/operations';
import { useAppDispatch } from '../../redux/store';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserNav } from '../UserNav/UserNav';
import defAvatar from '../../assets/imeges/tablet/t404.webp';
import { ResponsiveNav } from './ResponsiveNav';
import { BurgerMenuButton, HeaderContainer, MenuIcon } from './Header.styled';

export const Header: React.FC = () => {
  const isAuthenticated = useSelector(selectIsSignedIn);
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  const navProps = {
    onLogout: handleLogout,
    userName: user?.name || 'User',
    userAvatar: user?.avatar || defAvatar,
  };

  return (
    <HeaderContainer>
      <Logo />
      <Nav />
      {isAuthenticated ? <UserNav {...navProps} /> : <AuthNav />}
      <BurgerMenuButton onClick={toggleMenu}>
        <MenuIcon width={32} height={32} iconName="menu" />
      </BurgerMenuButton>
      {isMenuOpen && (
        <ResponsiveNav
          isOpen={isMenuOpen}
          closeMenu={closeMenu}
          isAuthenticated={isAuthenticated}
          {...navProps}
        />
      )}
    </HeaderContainer>
  );
};

// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Logo } from '../Logo/Logo';
// import { MobileMenu } from './MobileMenu';
// import { DesktopMenu } from './DesktopMenu';
// import { useAppDispatch } from '../../redux/store';
// import { selectIsSignedIn, selectUser } from '../../redux/auth/selectors';
// import { logoutUser } from '../../redux/auth/operations';
// import { BurgerMenuButton, HeaderContainer, MenuIcon } from './Header.styled';

// export const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const isAuthenticated = useSelector(selectIsSignedIn);
//   const user = useSelector(selectUser);
//   const dispatch = useAppDispatch();

//   const handleLogout = () => {
//     dispatch(logoutUser());
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(prevState => !prevState);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1280 && isMenuOpen) {
//         setIsMenuOpen(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [isMenuOpen]);

//     return (
//       <HeaderContainer>
//         <Logo />

//         <BurgerMenuButton onClick={toggleMenu}>
//           <MenuIcon width={32} height={32} iconName="menu" />
//         </BurgerMenuButton>

//         <MobileMenu
//           isOpen={isMenuOpen}
//           closeMenu={closeMenu}
//           isAuthenticated={isAuthenticated}
//           userName={user?.name || ''}
//           userAvatar={user?.avatar || ''}
//           onLogout={handleLogout}
//         />

//         <DesktopMenu
//           isAuthenticated={isAuthenticated}
//           userName={user?.name || ''}
//           userAvatar={user?.avatar || ''}
//           onLogout={handleLogout}
//         />
//       </HeaderContainer>
//     );
//   };
///////////////////////////**************правки************************************ */
// import React, { useCallback, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectIsSignedIn, selectUser } from '../../redux/auth/selectors';
// import { logoutUser } from '../../redux/auth/operations';
// import { useAppDispatch } from '../../redux/store';
// import { Logo } from '../Logo/Logo';
// import { Nav } from '../Nav/Nav';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { UserNav } from '../UserNav/UserNav';
// import defAvatar from '../../assets/imeges/tablet/t404.webp';
// import { ResponsiveNav } from './ResponsiveNav';
// import { BurgerMenuButton, HeaderContainer, MenuIcon } from './Header.styled';

// export const Header: React.FC = () => {
//   const isAuthenticated = useSelector(selectIsSignedIn);
//   const user = useSelector(selectUser);
//   const dispatch = useAppDispatch();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = useCallback(() => {
//     setIsMenuOpen(prev => !prev);
//   }, []);

//   const closeMenu = useCallback(() => {
//     setIsMenuOpen(false);
//   }, []);

//   const handleLogout = useCallback(() => {
//     dispatch(logoutUser());
//     // Якщо потрібно, можна додатково викликати closeMenu()
//     // closeMenu();
//   }, [dispatch]);

//   const navProps = {
//     onLogout: handleLogout,
//     userName: user?.name || 'User',
//     userAvatar: user?.avatar || defAvatar,
//   };

//   return (
//     <HeaderContainer>
//       <Logo />
//       <Nav />
//       {isAuthenticated ? (
//         <UserNav {...navProps} />
//       ) : (
//         <AuthNav closeMenu={closeMenu} />
//       )}
//       <BurgerMenuButton onClick={toggleMenu}>
//         <MenuIcon width={32} height={32} iconName="menu" />
//       </BurgerMenuButton>
//       {isMenuOpen && (
//         <ResponsiveNav
//           isOpen={isMenuOpen}
//           closeMenu={closeMenu}
//           isAuthenticated={isAuthenticated}
//           {...navProps}
//         />
//       )}
//     </HeaderContainer>
//   );
// };

/***************************************** */

// import React, { useCallback, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectIsSignedIn, selectUser } from '../../redux/auth/selectors';
// import { logoutUser } from '../../redux/auth/operations';
// import { useAppDispatch } from '../../redux/store';
// import { Logo } from '../Logo/Logo';
// import { Nav } from '../Nav/Nav';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { UserNav } from '../UserNav/UserNav';
// import defAvatar from '../../assets/imeges/tablet/t404.webp';
// import { ResponsiveNav } from './ResponsiveNav';
// import { BurgerMenuButton, HeaderContainer, MenuIcon } from './Header.styled';
// import { NavProps} from './Header.types';

// export const Header: React.FC = () => {
//   const isAuthenticated = useSelector(selectIsSignedIn);
//   const user = useSelector(selectUser);
//   const dispatch = useAppDispatch();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = useCallback(() => {
//     setIsMenuOpen(prev => !prev);
//   }, []);

//   const closeMenu = useCallback(() => {
//     setIsMenuOpen(false);
//   }, []);

//   const handleLogout = useCallback(() => {
//     dispatch(logoutUser());
//   }, [dispatch]);

//   const navProps: NavProps = {
//     onLogout: handleLogout,
//     userName: user?.name || 'User',
//     userAvatar: user?.avatar || defAvatar,
//     // closeMenu, // якщо потрібен у всіх компонентах
//   };

//   return (
//     <HeaderContainer>
//       <Logo />
//       <Nav />
//       {isAuthenticated ? (
//         <UserNav {...navProps} />
//       ) : (
//         <AuthNav closeMenu={closeMenu} />
//       )}
//       <BurgerMenuButton onClick={toggleMenu}>
//         <MenuIcon width={32} height={32} iconName="menu" />
//       </BurgerMenuButton>
//       {isMenuOpen && (
//         <ResponsiveNav
//           isOpen={isMenuOpen}
//           closeMenu={closeMenu}
//           isAuthenticated={isAuthenticated}
//           {...navProps}
//         />
//       )}
//     </HeaderContainer>
//   );
// };

// src/components/Header/ResponsiveNav.tsx
