import React from 'react';
import { HeaderNavLink, NavContainer } from './Nav.styled';
import { ThemeSelector } from '../Theme/ThemeSelector';

export const Nav: React.FC = () => {
  return (
    <NavContainer>
      <HeaderNavLink to="/news">Pet News</HeaderNavLink>
      <HeaderNavLink to="/notices">Find pet</HeaderNavLink>
      <HeaderNavLink to="/friends">Our Friends</HeaderNavLink>
      <ThemeSelector />
    </NavContainer>
  );
};
