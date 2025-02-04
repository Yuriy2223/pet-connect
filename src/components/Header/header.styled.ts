import styled from 'styled-components';
import { Container } from '../Common/Container';
import { Iconsvg } from '../Common/Icons';

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px 16px;
  /* position: relative; */

  @media (min-width: 768px) {
    padding: 32px;
  }

  @media (min-width: 1280px) {
    padding: 32px 64px;
  }
`;
export const HeaderMenuNav = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    padding: 12px;
  }
`;
export const BurgerMenuButton = styled.button`
  display: block;
  background: none;
  outline: none;
  border: none;
  margin-left: 12px;

  &:hover svg,
  &:active svg {
    transform: scale(1.2);
    stroke: ${({ theme }) => theme.primaryDark};
  }

  @media (min-width: 768px) {
    margin-left: 16px;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;
export const MenuIcon = styled(Iconsvg)`
  width: 32px;
  height: 32px;
  stroke: ${({ theme }) => theme.black};
`;
export const AvatarWrapDefault = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.lightYellow};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
export const AvatarDefaultIcon = styled(Iconsvg)`
  width: 30px;
  height: 30px;
  fill: ${({ theme }) => theme.primaryDark};
  stroke: ${({ theme }) => theme.primaryDark};
`;
// export const ResponsiveNavContainer = styled.div<{ $isOpen: boolean }>`
//   position: fixed;
//   top: 0;
//   right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
//   width: 60%;
//   height: 100vh;
//   background-color: ${({ theme }) => theme.primaryDark};
//   transition: right 700ms ease;
//   z-index: 5;
//   display: flex;
//   flex-direction: column;
//   justify-content: end;
//   padding: 40px 20px 40px;
// `;
// export const MenuWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   height: 70%;
// `;
// export const Overlay = styled.div<{ $isOpen: boolean }>`
//   display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background: transparent;
//   z-index: 3;
// `;
// export const CloseButton = styled.button`
//   padding: 6px;
//   position: absolute;
//   top: 28px;
//   right: 20px;
//   border: none;
//   background: transparent;

//   &:hover,
//   &:active {
//     transform: scale(1.2);
//   }
// `;
// export const CloseIcon = styled(Iconsvg)`
//   width: 32px;
//   height: 32px;
//   stroke: ${({ theme }) => theme.white};
// `;
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
