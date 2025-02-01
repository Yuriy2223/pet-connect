import styled from 'styled-components';
import { Container } from '../Common/Container';
import { Iconsvg } from '../Common/Icons';

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 34px 20px 0;
`;
export const BurgerMenuButton = styled.button`
  display: block;
  background: none;
  outline: none;
  border: none;
  margin-left: 12px;

  &:hover,
  &:active {
    transform: scale(1.2);
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

export const UserActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ResponsiveNavContainer = styled.div<{ $isOpen: boolean }>`
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
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 70%;
`;
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
// export const DesktopMenuContainer = styled.nav`
//   display: none;

//   @media (min-width: 1280px) {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 70%;
//   }
// `;
