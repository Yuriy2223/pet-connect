import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AuthNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const StyledNavLink = styled(NavLink)`
  border: 1px solid ${({ theme }) => theme.whiteOpacity};
  border-radius: 30px;
  width: 178px;
  height: 42px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    background-color: ${({ theme }) => theme.lightYellow};
    color: ${({ theme }) => theme.primaryDark};
  }

  &:hover {
    background-color: ${({ theme }) => theme.lightYellow};
    color: ${({ theme }) => theme.primaryDark};
  }

  @media (min-width: 1280px) {
    background-color: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme.primaryLight};

    &.active {
      background-color: ${({ theme }) => theme.primaryDark};
      color: ${({ theme }) => theme.white};
      border: 1px solid ${({ theme }) => theme.primaryDark};
    }

    &:hover {
      background-color: ${({ theme }) => theme.primaryDark};
      color: ${({ theme }) => theme.white};
      border: 1px solid ${({ theme }) => theme.primaryDark};
    }
  }
`;

export const AuthNav:  React.FC<{ closeMenu?: () => void }> = ({ closeMenu }) => {
  return (
    <AuthNavContainer>
      <StyledNavLink to="/login" onClick={closeMenu}>Log In</StyledNavLink>
      <StyledNavLink to="/register" onClick={closeMenu}>Registration</StyledNavLink>
    </AuthNavContainer>
  );
};
