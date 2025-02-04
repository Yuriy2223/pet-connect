import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Iconsvg } from '../../Common/Icons';

export const Overlay = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
  z-index: 3;
`;
export const BurgerMenuContainer = styled.div<{ $isOpen: boolean }>`
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
export const CloseButton = styled.button`
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
export const CloseIcon = styled(Iconsvg)`
  width: 32px;
  height: 32px;
  stroke: ${({ theme }) => theme.white};
`;
export const BurgerMenuInner = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 70%; */
`;

export const BurgerMenuNav = styled.div``;

export const BurgerMenuNavLink = styled(NavLink)``;

// const AuthNavContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 8px;

//   @media (min-width: 768px) {
//     flex-direction: row;
//   }
// `;
// const BtnAuthNav = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 30px;
//   width: 178px;
//   height: 42px;
//   font-weight: 700;
//   font-size: 14px;
//   line-height: 1.29;
//   letter-spacing: -0.03em;
//   text-transform: uppercase;

//   color: ${({ theme }) => theme.white};
//   background-color: ${({ theme }) => theme.primaryDark};
//   border: 1px solid ${({ theme }) => theme.whiteOpacity};

//   &:hover,
//   &.active {
//     color: ${({ theme }) => theme.primaryDark};
//     background-color: ${({ theme }) => theme.lightYellow};
//     border: 1px solid ${({ theme }) => theme.lightYellow};
//   }

//   @media (min-width: 1280px) {
//     color: ${({ theme }) => theme.primaryDark};
//     background-color: ${({ theme }) => theme.lightYellow};
//     border: 1px solid ${({ theme }) => theme.primaryDark};

//     &:hover,
//     &.active {
//       border: 1px solid ${({ theme }) => theme.primaryDark};
//       background-color: ${({ theme }) => theme.primaryDark};
//       color: ${({ theme }) => theme.white};
//     }
//   }
// `;
// const NavContainer = styled.nav`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 10px;

//   @media (min-width: 1280px) {
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//   }
// `;
// const HeaderNavLink = styled(NavLink)`
//   border: 1px solid ${({ theme }) => theme.whiteOpacity};
//   border-radius: 30px;
//   width: 119px;
//   height: 48px;
//   white-space: nowrap;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 1.29;
//   letter-spacing: -0.03em;
//   color: ${({ theme }) => theme.white};
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &.active {
//     border: 1px solid ${({ theme }) => theme.white};
//   }

//   &:hover {
//     border: 1px solid ${({ theme }) => theme.white};
//   }

//   @media (min-width: 1280px) {
//     border: 1px solid ${({ theme }) => theme.opacity};
//     color: ${({ theme }) => theme.black};
//     font-size: 16px;
//     line-height: 1.25;

//     &.active {
//       border: 1px solid ${({ theme }) => theme.primaryDark};
//     }

//     &:hover {
//       border: 1px solid ${({ theme }) => theme.primaryDark};
//     }
//   }
// `;
// const LogOutBtnContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 8px;

//   @media (min-width: 768px) {
//     flex-direction: row;
//   }
// `;

export const AuthButtonWrapper = styled.div``;
export const AuthButton = styled(NavLink)``;
export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  width: 178px;
  height: 42px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primaryDark};
  border: 1px solid ${({ theme }) => theme.whiteOpacity};

  &:hover,
  &.active {
    color: ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.lightYellow};
    border: 1px solid ${({ theme }) => theme.lightYellow};
  }

  @media (min-width: 1280px) {
    color: ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.lightYellow};
    border: 1px solid ${({ theme }) => theme.primaryDark};

    &:hover,
    &.active {
      border: 1px solid ${({ theme }) => theme.primaryDark};
      background-color: ${({ theme }) => theme.primaryDark};
      color: ${({ theme }) => theme.white};
    }
  }
`;
// export const UserAvatarHeader = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   object-fit: cover;
//   position: absolute;
//   right: 54px;
//   top: 44%;
//   border: 1px solid ${({ theme }) => theme.primaryDark};
//   background-color: ${({ theme }) => theme.lightYellow};

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;
// export const AvatarWrapDefault = styled.div`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   background-color: ${({ theme }) => theme.lightYellow};
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   /* @media (min-width: 768px) {
//     display: none;
//   } */
// `;
// export const AvatarDefaultIcon = styled(Iconsvg)`
//   width: 30px;
//   height: 30px;
//   fill: ${({ theme }) => theme.primaryDark};
//   stroke: ${({ theme }) => theme.primaryDark};
// `;

// export const DefaultAvatarWrap = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   position: absolute;
//   right: 64px;
//   top: 46%;
//   /* border: 1px solid ${({ theme }) => theme.primaryDark}; */
//   background-color: ${({ theme }) => theme.lightYellow};
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;
// export const DefaultAvatarIcon = styled(Iconsvg)`
//   width: 24px;
//   height: 24px;
//   fill: ${({ theme }) => theme.primaryDark};
//   stroke: ${({ theme }) => theme.primaryDark};
// `;
