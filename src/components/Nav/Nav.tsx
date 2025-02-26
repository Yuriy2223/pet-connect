import React from 'react';
import { HeaderNavLink, NavContainer } from './Nav.styled';

export const Nav: React.FC = () => {
  return (
    <NavContainer>
      <HeaderNavLink to="/news">News</HeaderNavLink>
      <HeaderNavLink to="/notices">Notices</HeaderNavLink>
      <HeaderNavLink to="/friends">Our Friends</HeaderNavLink>
    </NavContainer>
  );
};
