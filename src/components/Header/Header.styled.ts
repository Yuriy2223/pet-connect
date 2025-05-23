import styled from 'styled-components';
import { Container } from '../Common/Container';
import { Iconsvg } from '../Common/Icons';

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

  @media (min-width: 768px) {
    padding: 18px 32px;
  }

  @media (min-width: 1280px) {
    padding: 22px 64px;
  }
`;
export const HeaderMenuNav = styled.div`
  display: flex;
  align-items: center;
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
export const AvatarWrapHeader = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.lightYellow};
  border: 2px solid ${({ theme }) => theme.primaryDark};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;

    @media (min-width: 768px) {
      width: 48px;
      height: 48px;
    }
  }

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
export const AvatarDefaultIcon = styled(Iconsvg)`
  width: 26px;
  height: 26px;
  fill: ${({ theme }) => theme.primaryDark};
  stroke: ${({ theme }) => theme.primaryDark};

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
