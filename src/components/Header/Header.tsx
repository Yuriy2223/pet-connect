import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsSignedIn, selectUser } from '../../redux/auth/selectors';
// import { logoutUser } from '../../redux/auth/operations';
import { selectModalType } from '../../redux/modal/selectors';
// import { openModal, closeModal } from '../../redux/modal/slice';
import { openModal } from '../../redux/modal/slice';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserNav } from '../UserNav/UserNav';
import { ResponsiveNav } from './ResponsiveNav';
import { ModalApproveAction } from '../../modals/ModalApproveAction/ModalApproveAction';

import defAvatar from '../../assets/imeges/tablet/t404.webp';

import { BurgerMenuButton, HeaderContainer, MenuIcon } from './Header.styled';

export const Header: React.FC = () => {
  const isAuthenticated = useSelector(selectIsSignedIn);
  const user = useSelector(selectUser);
  const modalType = useSelector(selectModalType);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <HeaderContainer>
      <Logo />
      {isDesktop && <Nav />}
      {isDesktop &&
        (isAuthenticated ? (
          <UserNav
            userName={user?.name || 'User'}
            userAvatar={user?.avatar || defAvatar}
            onLogout={() => dispatch(openModal({ type: 'ModalApproveAction' }))}
            closeMenu={closeMenu}
          />
        ) : (
          <AuthNav />
        ))}

      <BurgerMenuButton onClick={toggleMenu}>
        <MenuIcon width={32} height={32} iconName="menu" />
      </BurgerMenuButton>
      {isMenuOpen && (
        <ResponsiveNav
          isOpen={isMenuOpen}
          isAuthenticated={isAuthenticated}
          onLogout={() => dispatch(openModal({ type: 'ModalApproveAction' }))}
          closeMenu={closeMenu}
          userName={user?.name || 'User'}
          userAvatar={user?.avatar || defAvatar}
        />
      )}
      {modalType === 'ModalApproveAction' && <ModalApproveAction />}
    </HeaderContainer>
  );
};

// import React, { useCallback, useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectIsSignedIn, selectUser } from '../../redux/auth/selectors';
// import { logoutUser } from '../../redux/auth/operations';
// import { useAppDispatch } from '../../redux/store';
// import { Logo } from '../Logo/Logo';
// import { Nav } from '../Nav/Nav';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { UserNav } from '../UserNav/UserNav';
// import { ResponsiveNav } from './ResponsiveNav';
// import { ModalApproveAction } from '../../modals/ModalApproveAction/ModalApproveAction';

// import defAvatar from '../../assets/imeges/tablet/t404.webp';

// import { BurgerMenuButton, HeaderContainer, MenuIcon } from './Header.styled';

// export const Header: React.FC = () => {
//   const isAuthenticated = useSelector(selectIsSignedIn);
//   const user = useSelector(selectUser);
//   const dispatch = useAppDispatch();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
//   const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 1280);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleMenu = useCallback(() => {
//     setIsMenuOpen(prev => !prev);
//   }, []);

//   const closeMenu = useCallback(() => {
//     setIsMenuOpen(false);
//   }, []);

//   const handleLogout = useCallback(() => {
//     dispatch(logoutUser());
//   }, [dispatch]);

//   return (
//     <HeaderContainer>
//       <Logo />
//       {isDesktop && <Nav />}
//       {isDesktop &&
//         (isAuthenticated ? (
//           <UserNav
//             userName={user?.name || 'User'}
//             userAvatar={user?.avatar || defAvatar}
//             onLogout={() => setIsLogoutModalOpen(true)}
//             closeMenu={closeMenu}
//           />
//         ) : (
//           <AuthNav />
//         ))}

//       <BurgerMenuButton onClick={toggleMenu}>
//         <MenuIcon width={32} height={32} iconName="menu" />
//       </BurgerMenuButton>
//       {isMenuOpen && (
//         <ResponsiveNav
//           isOpen={isMenuOpen}
//           isAuthenticated={isAuthenticated}
//           onLogout={() => setIsLogoutModalOpen(true)}
//           closeMenu={closeMenu}
//           userName={user?.name || 'User'}
//           userAvatar={user?.avatar || defAvatar}
//         />
//       )}
//       {isLogoutModalOpen && (
//         <ModalApproveAction
//           onLogout={handleLogout}
//           closeModal={() => setIsLogoutModalOpen(false)}
//         />
//       )}
//     </HeaderContainer>
//   );
// };
