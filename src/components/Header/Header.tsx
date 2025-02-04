import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsSignedIn, selectUser } from '../../redux/auth/selectors';
import { selectModalType } from '../../redux/modal/selectors';
import { openModal } from '../../redux/modal/slice';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserNav } from '../UserNav/UserNav';
import { ModalApproveAction } from '../../modals/ModalApproveAction/ModalApproveAction';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import {
  AvatarDefaultIcon,
  AvatarWrapDefault,
  BurgerMenuButton,
  HeaderContainer,
  HeaderMenuNav,
  MenuIcon,
} from './Header.styled';

export const Header: React.FC = () => {
  const isAuthenticated = useSelector(selectIsSignedIn);
  const user = useSelector(selectUser);
  const modalType = useSelector(selectModalType);
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
            userName={user?.name || 'User'}
            userAvatar={
              user?.avatar ? (
                <img src={user.avatar} alt="User avatar" />
              ) : (
                <AvatarWrapDefault>
                  <AvatarDefaultIcon iconName="user" />
                </AvatarWrapDefault>
              )
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
      {modalType === 'ModalApproveAction' && <ModalApproveAction />}
    </HeaderContainer>
  );
};

/**************ghj,b ********************* */
// import React, { useCallback, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsSignedIn, selectUser } from '../../redux/auth/selectors';
// import { selectModalType } from '../../redux/modal/selectors';
// import { openModal } from '../../redux/modal/slice';
// import { Logo } from '../Logo/Logo';
// import { Nav } from '../Nav/Nav';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { UserNav } from '../UserNav/UserNav';
// import { ResponsiveNav } from './ResponsiveNav';
// import { ModalApproveAction } from '../../modals/ModalApproveAction/ModalApproveAction';
// import {
//   AvatarDefaultIcon,
//   AvatarWrapDefault,
//   BurgerMenuButton,
//   DefaultAvatarIcon,
//   DefaultAvatarWrap,
//   HeaderContainer,
//   MenuIcon,
//   UserAvatarHeader,
// } from './Header.styled';

// export const Header: React.FC = () => {
//   const isAuthenticated = useSelector(selectIsSignedIn);
//   const user = useSelector(selectUser);
//   const modalType = useSelector(selectModalType);
//   const dispatch = useDispatch();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 768);
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

//   return (
//     <HeaderContainer>
//       <Logo />
//       {isDesktop && <Nav />}
//       {isDesktop &&
//         (isAuthenticated ? (
//           <UserNav
//             userName={user?.name || 'User'}
//             userAvatar={
//               user?.avatar ? (
//                 user.avatar
//               ) : (
//                 <AvatarWrapDefault>
//                   <AvatarDefaultIcon width={30} height={30} iconName="user" />
//                 </AvatarWrapDefault>
//               )
//             }
//             onLogout={() => dispatch(openModal({ type: 'ModalApproveAction' }))}
//             closeMenu={closeMenu}
//           />
//         ) : (
//           <AuthNav />
//         ))}

//       {isAuthenticated ? (
//         user?.avatar ? (
//           <UserAvatarHeader src={user.avatar} alt="avatar" />
//         ) : (
//           <DefaultAvatarWrap>
//             <DefaultAvatarIcon width={24} height={24} iconName="user" />
//           </DefaultAvatarWrap>
//         )
//       ) : null}

//       <BurgerMenuButton onClick={toggleMenu}>
//         <MenuIcon width={32} height={32} iconName="menu" />
//       </BurgerMenuButton>

//       {isMenuOpen && (
//         <ResponsiveNav
//           isOpen={isMenuOpen}
//           isAuthenticated={isAuthenticated}
//           onLogout={() => dispatch(openModal({ type: 'ModalApproveAction' }))}
//           closeMenu={closeMenu}
//           userName={user?.name || 'User'}
//         />
//       )}
//       {modalType === 'ModalApproveAction' && <ModalApproveAction />}
//     </HeaderContainer>
//   );
// };
