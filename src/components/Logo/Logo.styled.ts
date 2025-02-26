import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Iconsvg } from '../Common/Icons';

export const LogoContainer = styled(Link)`
  padding: 4px;
`;
export const LogoText = styled.p`
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
export const LogoIcon = styled(Iconsvg)`
  fill: ${({ theme }) => theme.primaryDark};
  stroke: ${({ theme }) => theme.primaryDark};

  @media (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;
