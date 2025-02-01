import React, { useEffect } from 'react';
import { ResponsiveNavProps } from '../Header/Header.types';
import { Nav } from '../Nav/Nav';
import { UserNav } from '../UserNav/UserNav';
import { AuthNav } from '../AuthNav/AuthNav';
import {
  CloseButton,
  CloseIcon,
  MenuWrapper,
  ResponsiveNavContainer,
  Overlay,
} from './Header.styled';

export const ResponsiveNav: React.FC<ResponsiveNavProps> = ({
  isOpen,
  closeMenu,
  isAuthenticated,
  userName,
  userAvatar,
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

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={closeMenu} />

      <ResponsiveNavContainer $isOpen={isOpen}>
        <CloseButton onClick={closeMenu}>
          <CloseIcon width={32} height={32} iconName="close" />
        </CloseButton>

        <MenuWrapper>
          <Nav />
          {isAuthenticated ? (
            <UserNav
              userName={userName}
              userAvatar={userAvatar}
              onLogout={onLogout}
            />
          ) : (
            <AuthNav />
          )}
        </MenuWrapper>
      </ResponsiveNavContainer>
    </>
  );
};

// // import React, { useEffect } from 'react';
// // import { Nav } from '../Nav/Nav';
// // import { UserNav } from '../UserNav/UserNav';
// // import { AuthNav } from '../AuthNav/AuthNav';
// // import {
// //   CloseButton,
// //   CloseIcon,
// //   MenuWrapper,
// //   ResponsiveNavContainer,
// //   Overlay,
// // } from './Header.styled';

// // interface ResponsiveNavProps {
// //   isOpen: boolean;
// //   closeMenu: () => void;
// //   isAuthenticated: boolean;
// //   userName: string;
// //   userAvatar: string;
// //   onLogout: () => void;
// // }

// // export const ResponsiveNav: React.FC<ResponsiveNavProps> = ({
// //   isOpen,
// //   closeMenu,
// //   isAuthenticated,
// //   userName,
// //   userAvatar,
// //   onLogout,
// // }) => {
// //   useEffect(() => {
// //     const handleKeyDown = (event: KeyboardEvent) => {
// //       if (event.key === 'Escape') {
// //         closeMenu();
// //       }
// //     };

// //     if (isOpen) {
// //       document.addEventListener('keydown', handleKeyDown);
// //     }

// //     return () => {
// //       document.removeEventListener('keydown', handleKeyDown);
// //     };
// //   }, [isOpen, closeMenu]);

// //   return (
// //     <>
// //       <Overlay $isOpen={isOpen} onClick={closeMenu} />

// //       <ResponsiveNavContainer $isOpen={isOpen}>
// //         <CloseButton onClick={closeMenu}>
// //           <CloseIcon width={32} height={32} iconName="close" />
// //         </CloseButton>

// //         <MenuWrapper>
// //           <Nav closeMenu={closeMenu} />
// //           {isAuthenticated ? (
// //             <UserNav
// //               closeMenu={closeMenu}
// //               userName={userName}
// //               userAvatar={userAvatar}
// //               onLogout={onLogout}
// //             />
// //           ) : (
// //             <AuthNav closeMenu={closeMenu} />
// //           )}
// //         </MenuWrapper>
// //       </ResponsiveNavContainer>
// //     </>
// //   );
// // };

// import React, { useEffect } from 'react';
// import { Nav } from '../Nav/Nav';
// import { UserNav } from '../UserNav/UserNav';
// import { AuthNav } from '../AuthNav/AuthNav';
// import {
//   CloseButton,
//   CloseIcon,
//   MenuWrapper,
//   ResponsiveNavContainer,
//   Overlay,
// } from './Header.styled';

// interface ResponsiveNavProps {
//   isOpen: boolean;
//   closeMenu: () => void;
//   isAuthenticated: boolean;
//   userName: string;
//   userAvatar: string;
//   onLogout: () => void;
// }

// export const ResponsiveNav: React.FC<ResponsiveNavProps> = ({
//   isOpen,
//   closeMenu,
//   isAuthenticated,
//   userName,
//   userAvatar,
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
//           <Nav closeMenu={closeMenu} />
//           {isAuthenticated ? (
//             <UserNav
//               closeMenu={closeMenu}
//               userName={userName}
//               userAvatar={userAvatar}
//               onLogout={onLogout}
//             />
//           ) : (
//             <AuthNav closeMenu={closeMenu} />
//           )}
//         </MenuWrapper>
//       </ResponsiveNavContainer>
//     </>
//   );
// };

// src/components/ResponsiveNav/ResponsiveNav.tsx

// import React, { useEffect } from 'react';
// import { Nav } from '../Nav/Nav';
// import { UserNav } from '../UserNav/UserNav';
// import { AuthNav } from '../AuthNav/AuthNav';
// import {
//   CloseButton,
//   CloseIcon,
//   MenuWrapper,
//   ResponsiveNavContainer,
//   Overlay,
// } from './Header.styled';
// import { ResponsiveNavProps } from '../Header/Header.types';

// export const ResponsiveNav: React.FC<ResponsiveNavProps> = ({
//   isOpen,
//   closeMenu,
//   isAuthenticated,
//   userName,
//   userAvatar,
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
//           <Nav closeMenu={closeMenu} />
//           {isAuthenticated ? (
//             <UserNav
//               closeMenu={closeMenu}
//               userName={userName}
//               userAvatar={userAvatar}
//               onLogout={onLogout}
//             />
//           ) : (
//             <AuthNav closeMenu={closeMenu} />
//           )}
//         </MenuWrapper>
//       </ResponsiveNavContainer>
//     </>
//   );
// };

// import React, { useEffect } from 'react';
// import { Nav } from '../Nav/Nav';
// import { UserNav } from '../UserNav/UserNav';
// import { AuthNav } from '../AuthNav/AuthNav';
// import {
//   CloseButton,
//   CloseIcon,
//   MenuWrapper,
//   ResponsiveNavContainer,
//   Overlay,
// } from './Header.styled';
// import { ResponsiveNavProps } from '../Header/Header.types';

// export const ResponsiveNav: React.FC<ResponsiveNavProps> = ({
//   isOpen,
//   closeMenu,
//   isAuthenticated,
//   userName,
//   userAvatar,
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
//             <UserNav
//               userName={userName}
//               userAvatar={userAvatar}
//               onLogout={onLogout}
//             />
//           ) : (
//             <AuthNav />
//           )}
//         </MenuWrapper>
//       </ResponsiveNavContainer>
//     </>
//   );
// };

// src/components/Header/ResponsiveNav.tsx

// import React, { useEffect } from 'react';
// import { Nav } from '../Nav/Nav';
// import { UserNav } from '../UserNav/UserNav';
// import { AuthNav } from '../AuthNav/AuthNav';
// import {
//   CloseButton,
//   CloseIcon,
//   MenuWrapper,
//   ResponsiveNavContainer,
//   Overlay,
// } from './Header.styled';
// import { ResponsiveNavProps } from '../Header/Header.types';

// export const ResponsiveNav: React.FC<ResponsiveNavProps> = ({
//   isOpen,
//   closeMenu,
//   isAuthenticated,
//   userName,
//   userAvatar,
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
//             <UserNav
//               userName={userName}
//               userAvatar={userAvatar}
//               onLogout={onLogout}
//             />
//           ) : (
//             <AuthNav />
//           )}
//         </MenuWrapper>
//       </ResponsiveNavContainer>
//     </>
//   );
// };
