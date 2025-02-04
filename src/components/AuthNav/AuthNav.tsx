import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AuthNavContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px; */
  display: none;

  @media (min-width: 768px) {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    gap: 8px;
    /* flex-direction: row; */
  }
`;
const BtnAuthNav = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  width: 178px;
  height: 42px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  text-transform: uppercase;

  /* color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primaryDark};
  border: 1px solid ${({ theme }) => theme.whiteOpacity};

  &:hover,
  &.active {
    color: ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.lightYellow};
    border: 1px solid ${({ theme }) => theme.lightYellow};
  } */

  /* @media (min-width: 1280px) { */
  color: ${({ theme }) => theme.primaryDark};
  background-color: ${({ theme }) => theme.lightYellow};
  border: 1px solid ${({ theme }) => theme.primaryDark};

  &:hover,
  &.active {
    border: 1px solid ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.white};
  }
  /* } */
`;

export const AuthNav: React.FC = () => {
  return (
    <AuthNavContainer>
      <BtnAuthNav to="/login">Log In</BtnAuthNav>
      <BtnAuthNav to="/register">Registration</BtnAuthNav>
    </AuthNavContainer>
  );
};

/* @media (min-width: 1280px) { */
/* background-color: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme.primaryLight};

    &:hover,
    &.active {
      background-color: ${({ theme }) => theme.primaryDark};
      color: ${({ theme }) => theme.white};
      border: 1px solid ${({ theme }) => theme.primaryDark};
    } */

/* &:hover {
      background-color: ${({ theme }) => theme.primaryDark};
      color: ${({ theme }) => theme.white};
      border: 1px solid ${({ theme }) => theme.primaryDark};
    } */
/* } */
