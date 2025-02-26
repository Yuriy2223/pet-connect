import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
`;
export const HeaderNavLink = styled(NavLink)`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 30px;
    width: 119px;
    height: 48px;
    white-space: nowrap;
    font-weight: 500;

    border: 1px solid ${({ theme }) => theme.opacity};
    color: ${({ theme }) => theme.black};
    font-size: 16px;
    line-height: 1.25;

    &:hover,
    &.active {
      border: 1px solid ${({ theme }) => theme.primaryDark};
      color: ${({ theme }) => theme.primaryDark};
    }
  }
`;
