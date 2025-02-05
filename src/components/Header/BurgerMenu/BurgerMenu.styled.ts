import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Iconsvg } from '../../Common/Icons';

export const Overlay = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: 4;

  @media (min-width: 1280px) {
    display: none;
  }
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
  padding: 40px 16px 40px;

  @media (min-width: 1280px) {
    display: none;
  }
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
    transform: rotate(3600deg) scale(1.2);
    opacity: 0.8;
  }
`;
export const CloseIcon = styled(Iconsvg)`
  width: 32px;
  height: 32px;
  stroke: ${({ theme }) => theme.white};
`;
export const BurgerMenuInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 84%;
`;
export const BurgerMenuNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const BurgerMenuNavLink = styled(NavLink)`
  border: 1px solid ${({ theme }) => theme.whiteOpacity};
  border-radius: 30px;
  width: 120px;
  height: 48px;
  white-space: nowrap;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;

  &.active,
  &:hover {
    border: 1px solid ${({ theme }) => theme.white};
  }
`;
export const AuthButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
  }
`;
export const AuthButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  width: 156px;
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

  @media (min-width: 768px) {
    width: 178px;
  }
`;
export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  width: 156px;
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

  @media (min-width: 768px) {
    width: 178px;
  }
`;
