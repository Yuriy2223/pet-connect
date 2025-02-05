// import React, { useEffect } from 'react';
// import { ResponsiveNavProps } from '../Header/Header.types';
// import { Nav } from '../Nav/Nav';
// import { AuthNav } from '../AuthNav/AuthNav';
// import {
//   CloseButton,
//   CloseIcon,
//   MenuWrapper,
//   ResponsiveNavContainer,
//   Overlay,
// } from './Header.styled';
// import { LogOutButton } from './LogOutButton';

// export const ResponsiveNav: React.FC<ResponsiveNavProps> = ({
//   isOpen,
//   closeMenu,
//   isAuthenticated,
//   onLogout,
// }) => {
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') {
//         closeMenu();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener('keydown', handleKeyDown);
//     }

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [isOpen, closeMenu]);
//   return (
//     <>
//       <Overlay $isOpen={isOpen} onClick={closeMenu} />

//       <ResponsiveNavContainer $isOpen={isOpen}>
//         <CloseButton onClick={closeMenu}>
//           <CloseIcon width={32} height={32} iconName="close" />
//         </CloseButton>

//         <MenuWrapper>
//           <Nav />
//           {isAuthenticated ? (
//             <LogOutButton
//               onLogout={() => {
//                 onLogout();
//                 closeMenu();
//               }}
//               closeMenu={closeMenu}
//             />
//           ) : (
//             <AuthNav closeMenu={closeMenu} />
//           )}
//         </MenuWrapper>
//       </ResponsiveNavContainer>
//     </>
//   );
// };
