import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
`;
const HeaderNavLink = styled(NavLink)`
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

    &.active {
      border: 1px solid ${({ theme }) => theme.primaryDark};
    }

    &:hover {
      border: 1px solid ${({ theme }) => theme.primaryDark};
    }
  }
`;

export const Nav: React.FC = () => {
  return (
    <NavContainer>
      <HeaderNavLink to="/news">News</HeaderNavLink>
      <HeaderNavLink to="/notices">Notices</HeaderNavLink>
      <HeaderNavLink to="/friends">Our Friends</HeaderNavLink>
    </NavContainer>
  );
};
