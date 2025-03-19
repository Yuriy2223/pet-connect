import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AuthNavContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
const BtnAuthNav = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  width: 134px;
  height: 42px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.primaryDark};
  background-color: ${({ theme }) => theme.lightYellow};
  border: 1px solid ${({ theme }) => theme.primaryDark};

  &:hover,
  &.active {
    border: 1px solid ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.white};
  }
`;

export const AuthNav: React.FC = () => {
  return (
    <AuthNavContainer>
      <BtnAuthNav to="/login">Log In</BtnAuthNav>
      <BtnAuthNav to="/register">Registration</BtnAuthNav>
    </AuthNavContainer>
  );
};
