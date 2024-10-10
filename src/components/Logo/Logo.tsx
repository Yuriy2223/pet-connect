import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Iconsvg } from '../Common/Icons';

const LogoContainer = styled(Link)`
  padding: 4px;
`;
const LogoText = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.black};
  display: flex;
  align-items: center;
  gap: 3px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;
const LogoIcon = styled(Iconsvg)`
  fill: ${({ theme }) => theme.primaryDark};
  stroke: ${({ theme }) => theme.primaryDark};

  @media (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;

export const Logo: React.FC = () => {
  return (
    <LogoContainer to="/">
      <LogoText>
        Petl
        <LogoIcon width={20} height={20} iconName="heart" />
        ve
      </LogoText>
    </LogoContainer>
  );
};
